// backend/app.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan'); // For logging requests

// Import routes
const adminRoutes = require('./routes/v1/adminRoutes');
const eventRoutes = require('./routes/v1/eventRoutes');
const reservationRoutes = require('./routes/v1/reservationRoutes');
const userRoutes = require('./routes/v1/userRoutes');
const feedbackRoutes = require('./routes/v1/feedbackRoutes');
const searchRoutes = require('./routes/v1/searchRoutes');

// Import middleware
const errorMiddleware = require('./middleware/errorMiddleware');

// Create an Express application
const app = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(morgan('dev')); // Log requests to the console

// Define routes
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/events', eventRoutes);
app.use('/api/v1/reservations', reservationRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/feedback', feedbackRoutes);
app.use('/api/v1/search', searchRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Export the app
module.exports = app;