 // frontend/js/eventDetails.js
import api from './api.js';

const loadEventDetails = async (eventId) => {
    const eventDetails = await api.getEventDetails(eventId);
    document.getElementById('event-title').textContent = eventDetails.title;
    document.getElementById('event-description').textContent = eventDetails.description;
};

document.addEventListener('DOMContentLoaded', () => {
    const eventId = new URLSearchParams(window.location.search).get('id');
    loadEventDetails(eventId);
});
