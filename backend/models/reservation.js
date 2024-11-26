const db = require('./db');

// Reserve an event
exports.reserveEvent = async (userId, eventId) => {
  const result = await db.query(
    'INSERT INTO reservations (user_id, event_id) VALUES ($1, $2) RETURNING *',
    [userId, eventId]
  );
  return result.rows[0];
};

// Get all reservations for a user
exports.getUserReservations = async (userId) => {
  const result = await db.query('SELECT * FROM reservations WHERE user_id = $1', [userId]);
  return result.rows;
};

// Cancel a reservation
exports.cancelReservation = async (id) => {
  await db.query('DELETE FROM reservations WHERE id = $1', [id]);
};