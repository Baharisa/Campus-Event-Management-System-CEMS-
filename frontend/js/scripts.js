const apiBaseUrl = 'http://localhost:3000/api/v1'; // Base URL for the backend API

// Fetch events from the backend API
async function fetchEvents() {
    try {
        const response = await fetch(`${apiBaseUrl}/events`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const events = await response.json();
        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}

// Display fetched events on the Event Listing page
async function displayEvents() {
    const eventsListContainer = document.getElementById('events-list'); // Container to display events
    eventsListContainer.innerHTML = '<p>Loading events...</p>'; // Temporary loading message

    const events = await fetchEvents(); // Fetch events from the API

    if (events.length === 0) {
        eventsListContainer.innerHTML = '<p>No events found.</p>'; // Show message if no events are available
        return;
    }

    eventsListContainer.innerHTML = ''; // Clear the container
    events.forEach(event => {
        const eventCard = `
            <div class="event">
                <h2>${event.title}</h2>
                <img src="${event.image || 'images/placeholder.png'}" alt="${event.title}" />
                <p><strong>Date:</strong> ${event.date}</p>
                <p><strong>Description:</strong> ${event.description}</p>
                <button onclick="registerForEvent('${event.id}')">RSVP Now</button>
            </div>
        `;
        eventsListContainer.innerHTML += eventCard;
    });
}

// Register for an event (example functionality)
async function registerForEvent(eventId) {
    try {
        const response = await fetch(`${apiBaseUrl}/events/${eventId}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId: 1 }) // Example: Replace with actual user ID
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();
        alert(`Successfully registered for event: ${result.title}`);
    } catch (error) {
        console.error('Error registering for event:', error);
        alert('Failed to register for the event. Please try again.');
    }
}

// Call `displayEvents` when the page loads
document.addEventListener('DOMContentLoaded', displayEvents);
