require('dotenv').config(); // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes'); // Path to event routes
const userRoutes = require('./routes/userRoutes'); // Path to user routes
const { Pool } = require('pg'); // PostgreSQL for health check

const app = express();

// PostgreSQL Pool for database connections
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse incoming JSON requests

// Request logger middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/v1/events', eventRoutes); // Mount event routes
app.use('/api/v1/users', userRoutes); // Mount user routes

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
    console.error('Database health check failed:', error.message);
    res.status(500).json({ status: 'DOWN', error: 'Database connection failed' });
  }
});

// 404 Not Found handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Server setup and start
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Graceful shutdown
const gracefulShutdown = async (signal) => {
  console.log(`[INFO] ${signal} signal received. Closing resources...`);
  try {
    await pool.end();
    console.log('[INFO] Database pool closed.');
    server.close(() => {
      console.log('[INFO] Server shutdown complete.');
      process.exit(0);
    });
  } catch (err) {
    console.error('[ERROR] Failed during shutdown:', err.message);
    process.exit(1);
  }
};

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

module.exports = app; // Export the app for testing or further integration
