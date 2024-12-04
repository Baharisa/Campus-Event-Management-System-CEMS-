const bcrypt = require('bcrypt');

/**
 * Hash a plain text password.
 * @param {string} plainPassword - The password to hash.
 * @returns {Promise<string>} - The hashed password.
 */
async function hashPassword(plainPassword) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
}

/**
 * Compare a plain text password with a hashed password.
 * @param {string} plainPassword - The plain text password.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} - True if the passwords match, false otherwise.
 */
async function comparePasswords(plainPassword, hashedPassword) {
    const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
    return isMatch;
}

module.exports = { hashPassword, comparePasswords };
