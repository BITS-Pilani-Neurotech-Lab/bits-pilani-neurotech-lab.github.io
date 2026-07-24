# TASK: Repository Security, Hygiene & Environment Cleanup

## Objective
Audit and fix repository hygiene, secret management, and git tracking for a hybrid Next.js frontend and Django backend project. Ensure standard security practices are followed without introducing overly complex abstractions or enterprise bloat.

---

## 1. `.gitignore` Consolidation
Update or create the `.gitignore` file at the root of the repository to cover both Next.js and Django dependencies, database files, and local environment variables.

Ensure the following patterns are explicitly present in `.gitignore`:

```text
# Dependencies
node_modules/
venv/
.venv/
env/

# Build Outputs
.next/
out/
build/
dist/

# Database & Storage
*.sqlite3
db.sqlite3
backend/db.sqlite3
media/
staticfiles/

# Secrets & Environment Files
.env
.env.local
.env.*.local
backend/.env

# Python Bytecode & Cache
__pycache__/
*.pyc
*.pyo
*.pyd

# Operating System & IDE
.DS_Store
Thumbs.db
.vscode/
.idea/