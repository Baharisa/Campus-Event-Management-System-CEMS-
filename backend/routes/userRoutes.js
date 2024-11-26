// routes/userRoutes.js
const express = require('express');
const {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
} = require('../controllers/userController');

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get user profile
router.get('/:userId', getUserProfile);

// Update user profile
router.put('/update', updateUserProfile);

module.exports = router;