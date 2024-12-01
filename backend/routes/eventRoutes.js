const express = require('express');
const { Pool } = require('pg'); // PostgreSQL
const eventController = require('../controllers/eventController'); // Controller for event operations

const router = express.Router();

// Initialize PostgreSQL connection pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

/**
 * @desc    Get all events
 * @route   GET /api/v1/events
 */
router.get('/', async (req, res, next) => {
  try {
    console.log('[INFO] Fetching all events...');
    const result = await pool.query('SELECT * FROM events ORDER BY date ASC');

    if (result.rows.length === 0) {
      console.warn('[WARNING] No events found.');
      return res.status(404).json({ message: 'No events found.' });
    }

    console.log(`[INFO] Retrieved ${result.rows.length} events.`);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('[ERROR] Failed to fetch events:', error.message);
    res.status(500).json({ error: 'Failed to fetch events. Please try again later.' });
  }
});

// Also route to eventController's `getAllEvents` method for reusability
router.get('/', eventController.getAllEvents);

/**
 * @desc    Get past events with optional pagination
 * @route   GET /api/v1/events/past-events
 * @query   ?page=1&limit=10
 */
router.get('/past-events', async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const offset = (page - 1) * limit;

  try {
    console.log(`[INFO] Fetching past events - Page: ${page}, Limit: ${limit}`);
    const result = await pool.query(
      'SELECT * FROM events WHERE date < NOW() ORDER BY date DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );

    const totalQuery = await pool.query('SELECT COUNT(*) FROM events WHERE date < NOW()');
    const total = parseInt(totalQuery.rows[0].count, 10);

    if (result.rows.length === 0) {
      console.warn('[WARNING] No past events found.');
      return res.status(404).json({ message: 'No past events found.' });
    }

    console.log(`[INFO] Retrieved ${result.rows.length} past events.`);
    res.status(200).json({
      events: result.rows,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(total / limit),
        totalEvents: total,
      },
    });
  } catch (error) {
    console.error('[ERROR] Failed to fetch past events:', error.message);
    res.status(500).json({ error: 'Failed to fetch past events. Please try again later.' });
  }
});

// Also route to eventController's `getPastEvents` method
router.get('/past-events', eventController.getPastEvents);

/**
 * @desc    Create a new event
 * @route   POST /api/v1/events
 */
router.post('/', async (req, res, next) => {
  const { title, description, date, location, image } = req.body;

  // Validate required fields
  if (!title || !description || !date || !location) {
    console.warn('[WARNING] Missing required fields.');
    return res.status(400).json({ error: 'Missing required fields: title, description, date, location' });
  }

  // Check if date is a valid date
  const parsedDate = Date.parse(date);
  if (isNaN(parsedDate)) {
    console.warn('[WARNING] Invalid date format.');
    return res.status(400).json({ error: 'Invalid date format.' });
  }

  try {
    console.log('[INFO] Creating a new event...');
    const result = await pool.query(
      'INSERT INTO events (title, description, date, location, image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, date, location, image]
    );

    console.log('[INFO] Event created successfully');
    res.status(201).json({ message: 'Event created successfully', event: result.rows[0] });
  } catch (error) {
    console.error('[ERROR] Failed to create event:', error.message);
    res.status(500).json({ error: 'Failed to create event. Please try again later.' });
  }
});

// Also route to eventController's `createEvent` method
router.post('/', eventController.createEvent);

/**
 * @desc    Get dashboard statistics
 * @route   GET /api/v1/events/dashboard-data
 */
router.get('/dashboard-data', async (req, res, next) => {
  try {
    console.log('[INFO] Fetching dashboard data...');
    const queries = [
      pool.query('SELECT COUNT(*) FROM events'),
      pool.query('SELECT COUNT(*) FROM events WHERE date >= NOW()'),
      pool.query('SELECT COUNT(*) FROM events WHERE date < NOW()'),
      pool.query('SELECT COUNT(*) FROM registrations'),
      pool.query('SELECT activity_desc FROM activities ORDER BY activity_time DESC LIMIT 5'),
    ];

    const [totalEvents, upcomingEvents, pastEvents, totalRegistrations, recentActivities] = await Promise.all(queries);

    console.log('[INFO] Dashboard data fetched successfully.');
    res.status(200).json({
      totalEvents: parseInt(totalEvents.rows[0].count, 10),
      upcomingEvents: parseInt(upcomingEvents.rows[0].count, 10),
      pastEvents: parseInt(pastEvents.rows[0].count, 10),
      totalRegistrations: parseInt(totalRegistrations.rows[0].count, 10),
      recentActivities: recentActivities.rows.map((activity) => activity.activity_desc),
    });
  } catch (error) {
    console.error('[ERROR] Failed to fetch dashboard data:', error.message);
    res.status(500).json({ error: 'Failed to fetch dashboard data. Please try again later.' });
  }
});

// Also route to eventController's `getDashboardData` method
router.get('/dashboard-data', eventController.getDashboardData);

module.exports = router;
