import json
import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from groq import Groq
from pydantic import BaseModel
from pypdf import PdfReader
from fastapi.middleware.cors import CORSMiddleware

env_path = Path(__file__).parent / ".env"
if env_path.exists():
    load_dotenv(dotenv_path=env_path)
else:
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
    stream: bool = True
    streaming: bool | None = None

    def should_stream(self) -> bool:
        if self.streaming is not None:
            return bool(self.streaming)
        return bool(self.stream)

def get_candidate_system_prompt(resume: Resume) -> str:
    return f"""
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

def ask_candidate(question: str, resume: Resume) -> str:
    response = client.chat.completions.create(
        model=model,
        messages=[
            {
                "role": "system",
                "content": get_candidate_system_prompt(resume)
            },
            {
                "role": "user",
                "content": question
            }
        ]
    )
    return response.choices[0].message.content

def ask_candidate_stream(question: str, resume: Resume):
    try:
        response_stream = client.chat.completions.create(
            model=model,
            messages=[
                {
                    "role": "system",
                    "content": get_candidate_system_prompt(resume)
                },
                {
                    "role": "user",
                    "content": question
                }
            ],
            stream=True
        )
        for chunk in response_stream:
            content = chunk.choices[0].delta.content if (chunk.choices and chunk.choices[0].delta) else None
            if content:
                yield content
    except Exception as e:
        yield f" [Error: {str(e)}]"
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

def get_resume_path() -> Path:
    base_dir = Path(__file__).parent
    candidates = [
        base_dir / "my_resume.pdf",
        base_dir.parent / "assets" / "my resume.pdf",
        Path("backend/my_resume.pdf"),
        Path("assets/my resume.pdf"),
        Path("my_resume.pdf")
    ]
    for p in candidates:
        if p.exists():
            return p
    return base_dir / "my_resume.pdf"

_cached_resume: Resume | None = None
_cached_resume_text: str | None = None
_cached_pdf_mtime: float = 0.0

def get_resume_text() -> str:
    global _cached_resume_text, _cached_pdf_mtime
    pdf_path = get_resume_path()
    try:
        mtime = pdf_path.stat().st_mtime
    except Exception:
        mtime = 0.0
    if _cached_resume_text is None or mtime != _cached_pdf_mtime:
        _cached_resume_text = read_pdf(pdf_path)
        _cached_pdf_mtime = mtime
    return _cached_resume_text

def get_parsed_resume() -> Resume:
    global _cached_resume
    text = get_resume_text()
    if _cached_resume is None:
        _cached_resume = parse_resume(text)
    return _cached_resume

@app.get("/")
def home():
    return {
        "message": "my portfolio is running"
    }

@app.post("/chat")
def chat(request: ChatRequest):
    resume = get_parsed_resume()
    if request.should_stream():
        return StreamingResponse(
            ask_candidate_stream(request.question, resume),
            media_type="text/plain; charset=utf-8",
            headers={
                "Cache-Control": "no-cache",
                "X-Accel-Buffering": "no",
                "Connection": "keep-alive",
            }
        )
    answer = ask_candidate(request.question, resume)
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
    resume_text = get_resume_text()
    answer = match_jd(request.jd, resume_text)
    return {
        "answer": answer
    }