const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Event routes
const eventRoutes = require('./routes/eventRoutes'); // Adjusted path
app.use('/api/v1/events', eventRoutes); // Mount routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the CEMS Backend API');
});

module.exports = app;
