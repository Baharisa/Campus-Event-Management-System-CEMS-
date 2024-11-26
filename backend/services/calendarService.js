// Calendar synchronization 
// backend/services/calendarService.js

const { google } = require('googleapis');

// Setup Google Calendar API
const calendar = google.calendar('v3');

// Function to add event to Google Calendar
const addEventToCalendar = async (event) => {
    const calendarId = process.env.CALENDAR_ID; // Your calendar ID
    const newEvent = {
        summary: event.title,
        description: event.description,
        start: {
            dateTime: event.date.toISOString(),
            timeZone: 'America/New_York', // Adjust as necessary
        },
        end: {
            dateTime: new Date(event.date.getTime() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours later
            timeZone: 'America/New_York',
        },
    };

    return await calendar.events.insert({
        calendarId,
        resource: newEvent,
        auth: process.env.GOOGLE_API_KEY, // Your Google API Key
    });
};

module.exports = {
    addEventToCalendar,
};