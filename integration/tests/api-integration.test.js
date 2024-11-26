 // integration/tests/api-integration.test.js
const request = require('supertest');
const app = require('../../server'); // Adjust the path to your server file

describe('API Integration Tests', () => {
    it('should fetch event data successfully', async () => {
        const response = await request(app).get('/api/events');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('events');
    });

    it('should create a new event', async () => {
        const newEvent = {
            title: 'Test Event',
            date: '2024-03-12',
            description: 'This is a test event.',
        };

        const response = await request(app).post('/api/events').send(newEvent);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id'); // Assuming the response returns the created event ID
    });
});
