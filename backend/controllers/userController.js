// controllers/userController.js
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For JWT handling

// PostgreSQL pool connection (imported or passed as argument)
let pool; // Make sure to set this correctly

// Register a new user
exports.registerUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *', [username, hashedPassword]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Login user
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        if (result.rows.length > 0) {
            const user = result.rows[0];
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid) {
                const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
                return res.json({ token });
            }
        }
        res.status(401).send('Invalid credentials');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Get user profile
exports.getUserProfile = async (req, res) => {
    const userId = req.params.userId;
    try {
        const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
        if (result.rows.length > 0) {
            return res.json(result.rows[0]);
        }
        res.status(404).send('User not found');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    const { userId, username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query('UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *', [username, hashedPassword, userId]);
        if (result.rows.length > 0) {
            return res.json(result.rows[0]);
        }
        res.status(404).send('User not found');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// Set the PostgreSQL pool connection
exports.setPool = (p) => {
    pool = p;
};