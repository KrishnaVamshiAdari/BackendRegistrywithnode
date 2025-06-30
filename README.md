# BackendRegistrywithnode
🚀 Project Summary: Node.js Authentication & To-Do API
This project is a full-featured backend application built using Node.js, Express.js, and MongoDB, designed to demonstrate robust user authentication and secure API development. The system allows users to register, log in, manage sessions with JWT tokens, and perform CRUD operations on a personal To-Do list, all through protected endpoints.

🔧 Key Features:
User Authentication System:

Secure registration and login functionality.

Passwords are hashed using bcrypt for enhanced security.

JWT-based access and refresh token system implemented for session management.

To-Do List API (Protected):

Users can create, read, update, and delete to-do items.

API routes are protected and require a valid access token.

Token Management:

Access tokens expire quickly for safety.

Refresh tokens are used to generate new access tokens without re-logging in.

Secure logout that invalidates refresh tokens.

Database Integration:

MongoDB is used to store users and their to-do data.

Mongoose models and schemas ensure structured data handling.

Environment Configuration:

Sensitive information such as DB URI and secret keys are managed securely using .env files.

📁 Tech Stack:
Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT (Access + Refresh tokens), bcrypt

Environment Management: dotenv

✅ Outcomes:
A clean and modular backend system that adheres to RESTful practices.

Experience with real-world authentication patterns and secure API handling.
