# Employee Management System

[![React](https://img.shields.io/badge/React-19.1.1-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-blue.svg)](https://www.mysql.com/)
[![Vite](https://img.shields.io/badge/Build-Vite-646CFF.svg)](https://vitejs.dev/)

A modern, full-stack Employee Management System built with React, Node.js, Express, and MySQL. This application provides a comprehensive solution for managing employee records with a clean, responsive user interface.

## Features

- 📝 CRUD operations for employee records
- 🎯 Real-time data updates
- 🎨 Modern, responsive UI built with React and Bootstrap
- 🔒 RESTful API with Express.js
- 📊 MySQL database integration
- 🚀 Fast development with Vite
- 🛠 Easy deployment configuration

## Tech Stack

### Frontend
- React 19.1.1
- React Router DOM 7.8.1
- Bootstrap 5.3.7
- Axios for API calls
- Vite for build tooling

### Backend
- Node.js with Express
- MySQL2 for database operations
- CORS enabled
- Environment variables support with dotenv
- Morgan for HTTP request logging

## Getting Started

### Prerequisites
- Node.js (Latest LTS version)
- MySQL Server
- Git

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/atharvashirodkar/employee-management-system.git
   cd employee-management-system
   ```

2. Backend Setup
   ```bash
   cd ems-backend
   npm install

   # Create a .env file with the following variables:
   # PORT=8080
   # DB_HOST=localhost
   # DB_USER=your_username
   # DB_PASSWORD=your_password
   # DB_NAME=ems_db

   # Start the backend server
   npm run app
   ```

3. Frontend Setup
   ```bash
   cd ems-frontend
   npm install
   npm run dev
   ```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:8080

## API Endpoints

| Method | Endpoint                    | Description                |
|--------|----------------------------|----------------------------|
| GET    | /api/v1/employees         | Get all employees          |
| GET    | /api/v1/employees/:id     | Get employee by ID         |
| POST   | /api/v1/employees         | Create new employee        |
| PUT    | /api/v1/employees/:id     | Update employee            |
| DELETE | /api/v1/employees/:id     | Delete employee            |

## Development

For local development:
1. Frontend development server is powered by Vite
2. Backend uses nodemon for auto-reloading
3. ESLint is configured for code quality
4. API base URL can be configured in `ems-frontend/src/services/EmployeeService.js`

## Support

For support, please:
1. Check the existing GitHub issues
2. Create a new issue with a detailed description of your problem
3. Include relevant code snippets and error messages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Maintainers

- [@atharvashirodkar](https://github.com/atharvashirodkar) - Project Creator and Maintainer

## License

This project is licensed under the ISC License.