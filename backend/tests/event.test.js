// backend/tests/event.test.js

const request = require('supertest');
const app = require('../app');

describe('Event Routes', () => {
    it('should create a new event', async () => {
        const eventData = {
            title: 'Test Event',
            description: 'This is a test event.',
            date: new Date(),
            location: 'Test Location',
        };
        const res = await request(app).post('/api/v1/events').send(eventData);
        expect(res.statusCode).toEqual(201);
        expect(res.body.title).toEqual(eventData.title);
    });
});