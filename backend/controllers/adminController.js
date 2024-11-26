const db = require('../models/db'); // Assuming db.js has your database connection

// Get all users for admin
exports.getAllUsers = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user role
exports.updateUserRole = async (req, res) => {
  const { userId, role } = req.body;
  try {
    const result = await db.query('UPDATE users SET role = $1 WHERE id = $2 RETURNING *', [role, userId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await db.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};