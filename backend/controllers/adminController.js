// controllers/adminController.js
const { pool } = require('../models/db');  // Corrected path

// Example function for handling admin actions
const getAllUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        return res.json(result.rows);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { getAllUsers };
