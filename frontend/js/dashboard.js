// frontend/js/dashboard.js
import api from './api.js'; // Import API module

/**
 * Load and display dashboard data.
 */
const loadDashboardData = async () => {
    try {
        // Fetch event statistics from the API
        const stats = await api.fetchEventStats();
        const recentActivities = await api.fetchRecentActivities();

        // Update the event statistics on the dashboard
        document.getElementById('total-events').textContent = stats.totalEvents;
        document.getElementById('upcoming-events').textContent = stats.upcomingEvents;
        document.getElementById('past-events').textContent = stats.pastEvents;
        document.getElementById('total-registrations').textContent = stats.totalRegistrations;

        // Update the recent activities section
        const activityList = document.getElementById('activity-list');
        activityList.innerHTML = ''; // Clear existing list
        recentActivities.forEach(activity => {
            const li = document.createElement('li');
            li.textContent = activity;
            activityList.appendChild(li);
        });

    } catch (error) {
        console.error('Error loading dashboard data:', error.message);
        alert('Failed to load dashboard data. Please try again later.');
    }
};

// Attach loadDashboardData to DOMContentLoaded
document.addEventListener('DOMContentLoaded', loadDashboardData);
