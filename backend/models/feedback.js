const db = require('./db');

// Submit feedback
exports.submitFeedback = async (userId, eventId, comments) => {
  const result = await db.query(
    'INSERT INTO feedback (user_id, event_id, comments) VALUES ($1, $2, $3) RETURNING *',
    [userId, eventId, comments]
  );
  return result.rows[0];
};

// Get all feedback for an event
exports.getFeedbackForEvent = async (eventId) => {
  const result = await db.query('SELECT * FROM feedback WHERE event_id = $1', [eventId]);
  return result.rows;
};