# Campus-Event-Management-System-CEMS-
Campus Events Management System 

CEMS is a web application designed to streamline the organization and management of campus events. It allows administrators, event organizers, and students to interact with the system for tasks such as creating events, tracking participation, and providing feedback.

Features
User Management: Secure registration and login functionality.
Event Management: Create, view, edit, and delete events.
Dashboard: View event statistics and recent activities.
Feedback Collection: Submit feedback for past events.
Role-Based Access: Different functionality for administrators, event organizers, and students.

Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: PostgreSQL
Authentication: JSON Web Tokens (JWT)
Tools: Postman, pgAdmin, Visual Studio Code
Installation
Prerequisites
Node.js installed on your system.
PostgreSQL installed and running.
Postman (optional, for testing APIs).

Setup
Clone the repository:

git clone https://github.com/Baharisa/cems.git
cd cems
Navigate to the backend directory:

cd backend
Install dependencies:

npm install
Set up the environment variables: Create a .env file in the backend directory and add the following:

PORT=3000
DB_NAME=cems
DB_USER=postgres
DB_PASSWORD=your_database_password
DB_HOST=localhost

Set up the database:

Run the SQL scripts in database/migrations/ to create the tables.
Start the server:

node server.js
Testing
Using Postman
Start the backend server.
Open Postman and test the following endpoints:
Register User: POST http://localhost:3000/api/users/register

json

{
    "name": "Mahani B",
    "email": "MahaniB@gmail.com",
    "password": "password123"
}
Login User: POST http://localhost:3000/api/users/login

{
    "email": "MahaniB@gmail.com",
    "password": "password123"
}
Frontend Testing
Open the login.html file in your browser.
Test login functionality by entering user credentials.
Navigate to dashboard.html to verify token validation and secure access.

File Structure

CEMS/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── server.js
├── frontend/
│   ├── css/
│   ├── js/
│   ├── login.html
│   ├── dashboard.html
├── database/
│   ├── setup.sql
│   ├── migrations/
└── README.md

Future Enhancements
Add calendar integration for events.
Enable notifications for upcoming events.
Provide analytics dashboards for administrators.
