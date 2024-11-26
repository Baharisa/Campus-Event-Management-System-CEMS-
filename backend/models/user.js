const db = require('./db');

// Create a user
exports.createUser = async (username, password) => {
  const result = await db.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, password]
  );
  return result.rows[0];
};

// Get all users
exports.getAllUsers = async () => {
  const result = await db.query('SELECT * FROM users');
  return result.rows;
};

// Get user by ID
exports.getUserById = async (id) => {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

// Update user
exports.updateUser = async (id, username, password) => {
  const result = await db.query(
    'UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *',
    [username, password, id]
  );
  return result.rows[0];
};

// Delete user
exports.deleteUser = async (id) => {
  await db.query('DELETE FROM users WHERE id = $1', [id]);
};