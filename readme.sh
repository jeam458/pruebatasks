#!/bin/bash
# generate_readme.sh

cat > README.md << 'EOL'
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