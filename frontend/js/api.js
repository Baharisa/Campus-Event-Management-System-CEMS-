const apiBaseUrl = 'http://localhost:3000/api/v1';

// Fetch all events
async function fetchEvents() {
  try {
    const response = await fetch(`${apiBaseUrl}/events`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching events: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// Create a new event
async function createEvent(eventData) {
  try {
    const response = await fetch(`${apiBaseUrl}/events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventData),
    });
    if (!response.ok) {
      throw new Error(`Error creating event: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error creating event:', error);
  }
}

// Update an existing event
async function updateEvent(eventId, updatedData) {
  try {
    const response = await fetch(`${apiBaseUrl}/events/${eventId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error(`Error updating event: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error updating event:', error);
  }
}

// Delete an event
async function deleteEvent(eventId) {
  try {
    const response = await fetch(`${apiBaseUrl}/events/${eventId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Error deleting event: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error deleting event:', error);
  }
}

// Register for an event
async function registerForEvent(eventId, userData) {
  try {
    const response = await fetch(`${apiBaseUrl}/events/${eventId}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error(`Error registering for event: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error registering for event:', error);
  }
}

// Export the functions for use in other files
export { fetchEvents, createEvent, updateEvent, deleteEvent, registerForEvent };