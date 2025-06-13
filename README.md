# Task Management API - Documentación

![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

API para gestión de tareas con autenticación JWT y autorización por roles, desarrollada con NestJS y MongoDB.

## 📋 Requisitos

- Node.js v16+
- MongoDB 5.0+
- npm 8+
- Nest CLI (opcional)

## 🚀 Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/task-management-api.git
cd task-management-api

# Instalar dependencias
npm install

# Configurar variables de entorno (copiar .env.example)
cp .env.example .env

# Iniciar servidor en desarrollo
npm run start:dev

# Iniciar con Docker
docker-compose up -d

📚 API Endpoints
Authentication API
Endpoint	Method	Description	Auth Required
/auth/register	POST	Register new user	No
/auth/login	POST	Login and get JWT token	No
Sample Request Body:

json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
Tasks API (All require JWT)
Endpoint	Method	Description	Required Role
/tasks	POST	Create new task	user
/tasks	GET	List all user's tasks	user
/tasks/:id	GET	Get task details	user
/tasks/:id	PUT	Update task	user
/tasks/:id	DELETE	Delete task	user
Task Model:
typescript
{
  title: string;
  description?: string;
  status: 'todo' | 'in_progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  user: User; // Auto-assigned from JWT
}
Users API (Admin Only)
Endpoint	Method	Description	Required Role
/users	GET	List all users	admin
/users/:id	GET	Get user details	admin
/users/:id	PUT	Update user	admin
/users/:id	DELETE	Delete user	admin

🛡️ Authorization Matrix
Resource	Role	Create	Read	Update	Delete
Tasks	user	✓	✓	✓*	✓*
Users	admin	✓	✓	✓	✓
*Users can only modify/delete their own tasks

🚀 Project Structure
text
src/
├── auth/               # JWT Authentication
│   ├── dto/           # Data transfer objects
│   ├── guards/        # Auth guards
│   ├── strategies/    # Passport strategies
│   └── interfaces/    # Type definitions
├── tasks/             # Task management
│   ├── schemas/       # MongoDB schemas
│   └── dto/          # Validation DTOs
├── users/             # User management
├── config/            # Configuration files
├── common/            # Shared utilities
│   ├── filters/      # Exception filters
│   ├── interceptors/ # Response interceptors
│   └── decorators/   # Custom decorators
└── shared/            # Global modules

🐳 Docker Setup
bash
# Build and run with MongoDB
docker-compose up --build

# Access API at
http://localhost:3000/api
🧪 Testing
bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Test coverage
npm run test:cov
