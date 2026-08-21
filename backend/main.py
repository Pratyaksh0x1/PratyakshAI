import json
import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from groq import Groq
from pydantic import BaseModel
from pypdf import PdfReader
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)

model = "openai/gpt-oss-120b"
app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


#parse resume
class Experience(BaseModel):
    company: str | None = None
    role: str | None = None
    duration: str | None = None
    description: str | None = None
    skills_used: list[str] = []

class Resume(BaseModel):
    name: str | None = None
    email: str | None = None
    phone: str | None = None

    total_experience_years: float | None = None

    skills: list[str] = []
    experiences: list[Experience] = []
    education: list[str] = []
    projects: list[str] = []
    certifications: list[str] = []
resume_schema = Resume.model_json_schema()

class ChatRequest(BaseModel):
    question: str

def ask_candidate(question: str, resume: Resume):
    system_prompt = f"""
You are an AI assistant representing candidate Pratyaksh Tomar in a job interview setting.

Below is the candidate's resume data:
{resume.model_dump_json(indent=2)}

Rules:
1. Be concise, direct, and conversational. Keep answers short (2 to 4 sentences maximum) unless explicitly asked for a detailed breakdown.
2. Answer ONLY the specific question asked. Do NOT dump the entire resume or list unrelated experiences, skills, or projects.
3. Answer naturally in the first person ("I") as if you are the candidate interviewing with HR.
4. Use ONLY the provided resume information. Do NOT hallucinate or make up details.
5. If information is unavailable to answer the specific question, reply: "I don't have enough information to answer that."
6. Maintain a professional yet warm tone.
"""

    response = client.chat.completions.create(
        model=model,
        messages=[
            {
                "role":"system",
                "content":system_prompt
            },
            {
                "role":"user",
                "content":question
            }
        ]
    )

    return response.choices[0].message.content
def parse_resume(resume_text):
    system_prompt = f"""
    You are an expert resume parser.

    Extract information from the resume based on its meaning,
    not only based on exact section headings.

    Different resumes may use different headings.

    For example:
    - Experience
    - Professional Experience
    - Work History
    - Employment
    - Internships

    These may all contain relevant experience.

    Skills may also appear in the skills section, work experience,
    internships or projects.

    Return ONLY valid JSON matching this schema:

    {resume_schema}

    Important rules:

    1. Do not invent information.
    2. If a value is not available, return null.
    3. If a list has no information, return an empty list.
    4. Include internships inside experiences.
    5. Extract skills mentioned across the entire resume.
    """
    user_prompt = f"""
    Parse the following resume:

    {resume_text}
    """
    message_system={
        "role" : "system",
        "content" : system_prompt
    }
    message_user={
        "role" : "user",
        "content" : user_prompt
    }
    messages=[message_system, message_user]
    response_format={
        "type": "json_object"
    }
    response=client.chat.completions.create(model=model, messages=messages, response_format=response_format)
    raw_output = response.choices[0].message.content
    data = json.loads(raw_output)
    resume = Resume(**data)
    return resume

#pdf extraction
def read_pdf(file_path: Path):

    reader = PdfReader(file_path)

    text = ""

    for page in reader.pages:

        page_text = page.extract_text()

        if page_text:
            text += page_text + "\n"

    return text

@app.get("/")
def home():
    resume_text=read_pdf(Path("my_resume.pdf"))
    resume=parse_resume(resume_text)
    return {
        "message" : "my portfolio is running"
    }

@app.post("/chat")
def chat(request: ChatRequest):
    resume_text=read_pdf(Path("my_resume.pdf"))
    resume=parse_resume(resume_text)
    answer=ask_candidate(request.question, resume)
    return {
        "answer": answer
    }
class JDRequest(BaseModel):
    jd: str

def match_jd(jd: str, resume_text: str):
    prompt = f"""You are a resume screening assistant.
Compare the following resume text with the provided Job Description (JD) and give a match score (0-100) and feedback.

Resume:
{resume_text}

Job Description:
{jd}

Return the score and a brief explanation in this exact format:
Score: XX
Reason: ...
"""
    response = client.chat.completions.create(
        model=model,
        messages=[{"role": "user", "content": prompt}],
    )
    return response.choices[0].message.content

@app.post("/jd-match")
def jd_match(request: JDRequest):
    resume_text = read_pdf(Path("my_resume.pdf"))
    answer = match_jd(request.jd, resume_text)
    return {
        "answer": answer
    }
