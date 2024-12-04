const db = require('../models/db');

exports.registerForEvent = async (req, res) => {
    const { eventId } = req.params;
    const { userName, userEmail } = req.body;

    try {
        const eventExists = await db.query('SELECT * FROM events WHERE id = $1', [eventId]);
        if (!eventExists.rows.length) {
            return res.status(404).json({ error: 'Event not found' });
        }

        const newRegistration = await db.query(
            'INSERT INTO registrations (event_id, user_name, user_email) VALUES ($1, $2, $3) RETURNING *',
            [eventId, userName, userEmail]
        );
        res.status(201).json(newRegistration.rows[0]);
    } catch (error) {
        console.error('Error registering for event:', error);
        res.status(500).json({ error: 'Failed to register for event' });
    }
};
