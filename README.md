# Neurotech Labs Website & Recruitment Backend

This project contains the official website and recruitment portal for **BITS Pilani Neurotech Labs**. It features a modern **Next.js 16** frontend and a **Django REST Framework** backend to handle recruitment submissions.

---

## Tech Stack

- **Frontend**: Next.js 16 (App Router), React 19, Tailwind CSS v4, Lucide React
- **Backend**: Python, Django, Django REST Framework, django-cors-headers
- **Database**: SQLite3 (default Django DB)

---

## Repository Structure

```
neurotech-website/
├── app/                        # Next.js 16 Frontend App Router
│   ├── page.tsx                # Homepage (Bento grid & hero section)
│   ├── about/                  # About Us page
│   ├── demos/                  # Interactive technical demos
│   ├── pieces/                 # Neurotech articles & markdown viewer
│   └── recruitment/            # Recruitment application form & track selection
├── components/                 # Shared React components (Sidebar, MarkdownModal)
├── lib/                        # Server utilities (Markdown parser)
├── content/                    # Markdown articles & task specifications
├── backend/                    # Django Recruitment Backend
│   ├── core/                   # Django project configuration (settings, urls)
│   ├── recruitment/            # Recruitment app (models, serializers, views, urls)
│   ├── manage.py               # Django CLI utility
│   ├── .env.example            # Backend environment template
│   └── requirements.txt        # Python backend dependencies
├── .gitignore                  # Consolidated Next.js & Django gitignore
└── README.md
```

---

## Getting Started

### 1. Frontend Setup (Next.js)

Install dependencies and start the development server:

```bash
# Install NPM packages
npm install

# Start Next.js dev server on http://localhost:3000
npm run dev
```

The frontend will be available at [http://localhost:3000](http://localhost:3000).

---

## Security & Environment Configuration

The repository uses a consolidated [.gitignore](file:///.gitignore) to protect sensitive secrets, bytecode, build output, and database instances across both Next.js and Django:

- **Environment Variables**: Local `.env` files (e.g. `.env`, `.env.local`, `backend/.env`) are strictly excluded from version control.
- **Backend Configuration**: Copy `backend/.env.example` to `backend/.env` to configure custom environment variables such as `SECRET_KEY`, `DEBUG`, and `CORS_ALLOWED_ORIGINS`.
- **Database & Artifacts**: Local SQLite database files (`*.sqlite3`, `db.sqlite3`, `backend/db.sqlite3`), virtual environments (`venv/`, `.venv/`, `env/`), and Python bytecode (`__pycache__/`, `*.pyc`) are automatically ignored.

---

## 🔌 API Endpoints

### Submit Application
- **URL**: `/api/recruitment/apply/`
- **Method**: `POST`
- **Content-Type**: `application/json`
- **Request Body**:
```json
{
  "name": "Jane Doe",
  "email": "janedoe@example.com",
  "track": "tech",
  "portfolio": "https://github.com/janedoe",
  "sop": "Statement of purpose or task response text..."
}
```
- **Responses**:
  - `201 Created`: Application saved successfully.
  - `400 Bad Request`: Validation failure.
