document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get the button element
    const button = document.querySelector('.button');

    // Disable the button and show "Logging in..." text
    button.textContent = 'Logging in...';
    button.disabled = true;

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Send the login request to the backend
        const response = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Login successful
            alert('Login successful!');
            localStorage.setItem('token', data.token); // Save the JWT token
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            // Show error message
            const messageDiv = document.getElementById('message');
            messageDiv.style.display = 'block';
            messageDiv.textContent = data.message || 'Login failed. Please try again.';
        }
    } catch (error) {
        console.error('Login error:', error);
        const messageDiv = document.getElementById('message');
        messageDiv.style.display = 'block';
        messageDiv.textContent = 'An error occurred. Please try again later.';
    } finally {
        // Reset the button state
        button.textContent = 'Login';
        button.disabled = false;
    }
});
