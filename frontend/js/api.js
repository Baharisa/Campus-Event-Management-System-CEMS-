const API_BASE = 'http://localhost:3000/api/users';

/**
 * Register a new user.
 */
async function registerUser(userData) {
    const response = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
    });
    return response.json();
}

/**
 * Log in a user.
 */
async function loginUser(credentials) {
    const response = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
    });
    return response.json();
}

export { registerUser, loginUser };
