const db = require('./db');

// Get report of users and their reservations
exports.getUserReservationReport = async () => {
  const result = await db.query(`
    SELECT users.username, COUNT(reservations.id) AS reservation_count
    FROM users
    LEFT JOIN reservations ON users.id = reservations.user_id
    GROUP BY users.username
  `);
  return result.rows;
};

// Get report of events and their feedback
exports.getEventFeedbackReport = async () => {
  const result = await db.query(`
    SELECT events.title, COUNT(feedback.id) AS feedback_count
    FROM events
    LEFT JOIN feedback ON events.id = feedback.event_id
    GROUP BY events.title
  `);
  return result.rows;
};