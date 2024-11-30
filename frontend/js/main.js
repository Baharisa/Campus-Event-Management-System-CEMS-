import { fetchEvents } from './api.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  console.log('Application initialized');
  
  // Example: Fetch and display all events on a specific page
  if (document.getElementById('events-list')) {
    fetchAndDisplayEvents();
  }
});

async function fetchAndDisplayEvents() {
  const eventsList = document.getElementById('events-list');
  eventsList.innerHTML = '<p>Loading events...</p>';

  try {
    const events = await fetchEvents();
    if (events.length === 0) {
      eventsList.innerHTML = '<p>No events available.</p>';
    } else {
      eventsList.innerHTML = events.map(event => `
        <div class="event">
          <h2>${event.title}</h2>
          <p><strong>Date:</strong> ${event.date}</p>
          <p>${event.description}</p>
          <button onclick="alert('Register for ${event.title}')">RSVP Now</button>
        </div>
      `).join('');
    }
  } catch (error) {
    eventsList.innerHTML = '<p>Error loading events.</p>';
    console.error('Error:', error);
  }
}
