// frontend/js/api.js
const API_BASE_URL = 'http://localhost:5000/api';

const api = {
    getEvents: async () => {
        const response = await fetch(`${API_BASE_URL}/events`);
        return response.json();
    },
    getEventDetails: async (eventId) => {
        const response = await fetch(`${API_BASE_URL}/events/${eventId}`);
        return response.json();
    },
    submitFeedback: async (feedbackData) => {
        const response = await fetch(`${API_BASE_URL}/feedback`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(feedbackData),
        });
        return response.json();
    },
    // Additional API methods...
};

export default api;