const express = require('express');
const { Pool } = require('pg'); // PostgreSQL

const router = express.Router();

// Initialize PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// @desc    Get all events
// @route   GET /api/v1/events
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events ORDER BY event_date ASC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).send('Server Error');
  }
});

// @desc    Get past events
// @route   GET /api/v1/events/past-events
router.get('/past-events', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM events WHERE event_date < NOW() ORDER BY event_date DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching past events:', error);
    res.status(500).send('Server Error');
  }
});

// @desc    Create a new event
// @route   POST /api/v1/events
router.post('/', async (req, res) => {
  const { title, description, event_date, location, image } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO events (title, description, event_date, location, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, event_date, location, image]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
