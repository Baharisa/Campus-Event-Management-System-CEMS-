const db = require('../models/db');

// Create a new event
exports.createEvent = async (req, res) => {
  const { title, description, date, location } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO events (title, description, date, location) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, date, location]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM events ORDER BY date ASC');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an event
exports.updateEvent = async (req, res) => {
  const { eventId, title, description, date, location } = req.body;
  try {
    const result = await db.query(
      'UPDATE events SET title = $1, description = $2, date = $3, location = $4 WHERE id = $5 RETURNING *',
      [title, description, date, location, eventId]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const result = await db.query('DELETE FROM events WHERE id = $1 RETURNING *', [eventId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};