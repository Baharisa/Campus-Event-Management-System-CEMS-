// backend/controllers/adminController.js

const User = require('../models/user'); // Assuming User is a Sequelize model

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
};

// Update user role
exports.updateUserRole = async (req, res) => {
    const { userId, role } = req.body;
    try {
        const user = await User.findByPk(userId);
        if (user) {
            user.role = role;
            await user.save();
            res.status(200).json({ message: 'User role updated successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating user role', error });
    }
};