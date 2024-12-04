// Logout button functionality
document.getElementById('logoutButton').addEventListener('click', () => {
    localStorage.removeItem('token'); // Remove the token
    window.location.href = 'login.html'; // Redirect to the login page
});
