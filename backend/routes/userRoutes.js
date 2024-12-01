const express = require('express');
const { Pool } = require('pg'); // Import PostgreSQL connection pool
const router = express.Router();

// Initialize PostgreSQL connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// User registration route
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Validate required fields
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Insert user into database
        const query = `
            INSERT INTO users (username, email, password)
            VALUES ($1, $2, $3) RETURNING *;
        `;
        const values = [username, email, password];
        const result = await pool.query(query, values);

        // Return the inserted user
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('[ERROR] Failed to register user:', err);
        res.status(500).json({ error: 'Failed to register user' });
    }
});

module.exports = router;
