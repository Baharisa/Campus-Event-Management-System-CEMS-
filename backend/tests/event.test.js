// event.test.js

const request = require('supertest');
const app = require('../server');  // Ensure you're importing the correct app

describe('Event Endpoints', () => {
  it('should fetch all events', async () => {
    const res = await request(app).get('/api/events');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a new event', async () => {
    const res = await request(app)
      .post('/api/events')
      .send({ title: 'Test Event', date: '2024-03-10', description: 'Test Description' });

    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('title', 'Test Event');
  });
});
