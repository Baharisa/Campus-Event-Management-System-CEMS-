// backend/routes/v1/adminRoutes.js

const express = require('express');
const { getAllUsers, updateUserRole } = require('../../controllers/adminController');
const router = express.Router();

// Route to get all users
router.get('/users', getAllUsers);

// Route to update user role
router.put('/users/role', updateUserRole);

module.exports = router;