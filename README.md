# Pratyaksh Tomar — AI Portfolio

A modern, responsive, scrapbook-themed portfolio showcasing my software engineering projects. 
It features a custom-built AI backend that allows recruiters to "interview" an AI version of me and check how well my résumé matches their job descriptions.

## ✨ Features
- **Scrapbook Aesthetic**: A beautiful, handcrafted design using custom CSS filters.
- **Interactive AI Chat**: Ask my AI twin about my skills, projects, and education. Powered by a FastAPI + Groq backend that parses my real PDF résumé.
- **Job Description (JD) Matcher**: Paste a job description and instantly get an AI-generated fit score, strengths, and missing skills based on my actual résumé.
- **Responsive Layout**: Clean and readable experience across both desktop and mobile devices.

## 📂 Structure
```text
index.html      home (includes AI Chat and JD Matcher widgets)
about.html      education, skills, achievements
projects.html   project cards
resume.html     résumé download and static timeline
style.css       shared styles and mobile media queries
script.js       frontend logic for AI endpoints
assets/         profile photo + résumé PDF
backend/        FastAPI backend (main.py, requirements.txt, .env.example)
```

## 🚀 Running Locally

The project consists of a vanilla HTML frontend and a Python backend.

### 1. Start the Backend
The backend parses the résumé and connects to the Groq API for lightning-fast LLM inference.
```bash
cd backend
python -m venv venv

# Activate venv (Windows)
venv\Scripts\activate
# Activate venv (Mac/Linux)
source venv/bin/activate

pip install -r requirements.txt
```
Make sure you create a `.env` file from the example and add your Groq API Key:
```env
GROQ_API_KEY=your_actual_key_here
```
Start the FastAPI server:
```bash
uvicorn main:app --reload --port 8000
```

### 2. Start the Frontend
You can simply double-click `index.html` to open it in your browser. Alternatively, serve the folder:
```bash
# In the root portfolio directory
python -m http.server 5500
```
Then visit `http://localhost:5500`. 
*(Note: The frontend expects the backend to be running at `http://127.0.0.1:8000`)*.

## 🌐 Deployment
- **Frontend**: Deploy the root folder to Vercel, Netlify, or GitHub Pages.
- **Backend**: Deploy the `backend/` directory to Render, Railway, or Fly.io. 
*Note: Once the backend is deployed, update the API fetch URLs in `script.js` to point to your new public backend URL instead of localhost.*
