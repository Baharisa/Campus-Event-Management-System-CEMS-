const db = require('./db');

// Create an event
exports.createEvent = async (title, description, date, location) => {
  const result = await db.query(
    'INSERT INTO events (title, description, date, location) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, date, location]
  );
  return result.rows[0];
};

// Get all events
exports.getAllEvents = async () => {
  const result = await db.query('SELECT * FROM events ORDER BY date ASC');
  return result.rows;
};

// Get event by ID
exports.getEventById = async (id) => {
  const result = await db.query('SELECT * FROM events WHERE id = $1', [id]);
  return result.rows[0];
};

// Update event
exports.updateEvent = async (id, title, description, date, location) => {
  const result = await db.query(
    'UPDATE events SET title = $1, description = $2, date = $3, location = $4 WHERE id = $5 RETURNING *',
    [title, description, date, location, id]
  );
  return result.rows[0];
};

// Delete event
exports.deleteEvent = async (id) => {
  await db.query('DELETE FROM events WHERE id = $1', [id]);
};