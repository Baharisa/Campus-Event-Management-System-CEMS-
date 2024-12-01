const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes'); // Adjusted path for event routes
const { Pool } = require('pg'); // PostgreSQL for health check

const app = express();
require('dotenv').config();
// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// PostgreSQL Pool for health check
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Event Routes
app.use('/api/v1/events', eventRoutes); // Mount event routes

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Campus Event Management System (CEMS) Backend API');
});

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ status: 'UP', timestamp: result.rows[0].now });
  } catch (error) {
    console.error('Database health check failed:', error);
    res.status(500).json({ status: 'DOWN', error: 'Database connection failed' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

module.exports = app;