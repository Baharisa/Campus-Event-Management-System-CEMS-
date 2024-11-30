const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes'); // Adjusted path for event routes

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// Event Routes
app.use('/api/v1/events', eventRoutes); // Mount event routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Campus Event Management System (CEMS) Backend API');
});

// Global error handler (Optional, ensures proper error handling)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = app;
