const express = require('express');
const router = express.Router();

// Example user registration route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Insert user into database (example query)
        const query = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3) RETURNING *;
        `;
        const values = [username, email, password];
        const result = await pool.query(query, values);

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

module.exports = router;
