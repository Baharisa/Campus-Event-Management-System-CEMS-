// backend/routes/v1/userRoutes.js

const express = require('express');
const {
    registerUser,
    loginUser,
    getUserProfile
} = require('../../controllers/userController');

const router = express.Router();

// Route to register a new user
router.post('/register', registerUser);

// Route to login a user
router.post('/login', loginUser);

// Route to get user profile
router.get('/:userId', getUserProfile);

module.exports = router;