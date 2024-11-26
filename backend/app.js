// app.js
const express = require('express');
const dotenv = require('dotenv');
const pool = require('./models/db'); // Updated import path

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Example route to fetch data from the events table
app.get('/api/events', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM events'); // Adjust according to your table
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Campus Event Management System (CEMS)');
});

module.exports = app; // Export the app for use in server.js