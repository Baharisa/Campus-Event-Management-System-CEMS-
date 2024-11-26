const request = require('supertest');
const app = require('../app');

describe('Event Management', () => {
  it('should create a new event', async () => {
    const newEvent = {
      title: 'Test Event',
      description: 'This is a test event.',
      date: '2024-12-01T12:00:00Z',
      location: 'Test Location',
    };
    const res = await request(app).post('/api/events').send(newEvent);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe(newEvent.title);
  });

  it('should get all events', async () => {
    const res = await request(app).get('/api/events');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update an event', async () => {
    const updatedEvent = {
      title: 'Updated Test Event',
      description: 'This is an updated test event.',
      date: '2024-12-02T12:00:00Z',
      location: 'Updated Location',
    };
    const res = await request(app)
      .put('/api/events/1')
      .send(updatedEvent);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(updatedEvent.title);
  });

  it('should delete an event', async () => {
    const res = await request(app).delete('/api/events/1');
    expect(res.statusCode).toBe(204);
  });
});
