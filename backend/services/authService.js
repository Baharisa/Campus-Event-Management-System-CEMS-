// Authentication and token logic 
// backend/services/authService.js

const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Generate a JWT token
const generateToken = (user) => {
    return jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Authenticate user
const authenticateUser = async (username, password) => {
    const user = await User.findOne({ where: { username } });
    if (user && await bcrypt.compare(password, user.password)) {
        return generateToken(user);
    }
    throw new Error('Invalid credentials');
};

module.exports = {
    generateToken,
    authenticateUser,
};