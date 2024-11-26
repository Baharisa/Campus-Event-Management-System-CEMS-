const db = require('../models/db');

// Reserve an event
exports.reserveEvent = async (req, res) => {
  const { userId, eventId } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO reservations (user_id, event_id) VALUES ($1, $2) RETURNING *',
      [userId, eventId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get reservations for a user
exports.getUserReservations = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await db.query('SELECT * FROM reservations WHERE user_id = $1', [userId]);
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cancel a reservation
exports.cancelReservation = async (req, res) => {
  const { reservationId } = req.params;
  try {
    const result = await db.query('DELETE FROM reservations WHERE id = $1 RETURNING *', [reservationId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};