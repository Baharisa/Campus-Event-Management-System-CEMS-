# Campus Event Management System (CEMS)

## Overview

CEMS is a web application designed to manage campus events, allowing users to register, provide feedback, and manage reservations.

## Features

- User registration and authentication
- Create, view, and manage events
- Reserve spots for events
- Provide feedback on events
- Admin dashboard for managing events and user data

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (with frameworks like React or Vue if used)
- **Backend**: Node.js, Express, PostgreSQL
- **Testing**: Jest, Supertest

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Baharisa/cems.git
   cd cems


   Campus Events Management System (CEMS)
The Campus Events Management System (CEMS) is a comprehensive platform designed to simplify and streamline event management on university campuses. It allows administrators, event organizers, and students to create, manage, and participate in campus events with ease. The system includes features like user authentication, event registration, feedback collection, notifications, and an intuitive admin dashboard.

Table of Contents
Overview
Features
Technologies Used
Installation
Usage
Project Structure
Testing
Contributing
License
Overview
CEMS provides a centralized platform for managing campus events, addressing inefficiencies in event organization, communication, and participation. It caters to:

Students: Browse events, register, and provide feedback.
Event Organizers: Create and manage events, track registrations, and send notifications.
Administrators: Oversee the system, manage roles, and generate performance reports.
Features
User Authentication: Secure login and registration with JWT-based authentication.
Event Management: Create, update, and delete events with details like date, time, and location.
Calendar View: Interactive calendar to browse and view upcoming events.
Event Registration: Students can register for events and receive confirmation notifications.
Feedback Collection: Attendees can submit feedback for event improvement.
Admin Dashboard: Manage users, events, and view detailed reports.
Notifications: Email/SMS reminders and updates for events.
Technologies Used:

Frontend
HTML, CSS, JavaScript
Responsive design

Backend
Node.js, Express.js
PostgreSQL with Sequelize ORM
JWT for authentication
Nodemailer/Twilio for notifications


Testing
Mocha/Chai for backend testing
Jest for frontend testing
Selenium for UI testing
Installation
Follow these steps to set up the project locally:

Clone the Repository

bash
Copy code
git clone https://github.com/Baharisa/Campus-Event-Management-System-CEMS-.git
cd Campus-Event-Management-System-CEMS-
Install Dependencies

For the backend:
bash
Copy code
cd backend
npm install
For the frontend:
bash
Copy code
cd ../frontend
npm install
Set Up the Database

Navigate to the database/ folder and run the setup scripts:
bash
Copy code
psql -U <your_username> -d <your_database_name> -f setup.sql
Seed the database with sample data:
bash
Copy code
psql -U <your_username> -d <your_database_name> -f seed.sql
Configure Environment Variables

Create a .env file in the backend/ directory with the following:
makefile
Copy code
PORT=3000
DB_USER=<your_db_user>
DB_PASSWORD=<your_db_password>
DB_NAME=<your_db_name>
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=<your_secret_key>
Start the Servers

Backend:
bash
Copy code
cd backend
npm start
Frontend: Open index.html in your browser or serve it using a tool like Live Server.
Usage
Accessing the Application
Visit http://localhost:3000 to access the application.
Use the admin credentials from the seeded data to log in and explore admin features.
API Endpoints
View available API routes in backend/routes/.
Admin Dashboard
Manage events, users, and generate reports.
Project Structure
plaintext
Copy code
Campus Events Management System (CEMS)/
├── backend/                 # Backend logic
├── frontend/                # Frontend interface
├── database/                # Database setup and seed files
├── integration/             # Integration and end-to-end tests
├── README.md                # Project documentation
└── .gitignore               # Ignored files
Testing
Backend Tests:

bash
Copy code
cd backend
npm test
Frontend Tests:

bash
Copy code
cd ../frontend
npm test
Integration Tests:

bash
Copy code
cd ../integration
npm test
Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature-name.
Commit your changes: git commit -m "Added your feature".
Push to the branch: git push origin feature/your-feature-name.
Submit a pull request.
License
This project is licensed under the MIT License.

