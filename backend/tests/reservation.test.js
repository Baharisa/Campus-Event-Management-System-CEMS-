const request = require('supertest');
const app = require('../app');

describe('Reservation Management', () => {
  it('should reserve an event', async () => {
    const reservation = {
      userId: 1,
      eventId: 1,
    };
    const res = await request(app).post('/api/reservations').send(reservation);
    expect(res.statusCode).toBe(201);
    expect(res.body.user_id).toBe(reservation.userId);
  });

  it('should get all reservations for a user', async () => {
    const res = await request(app).get('/api/reservations/user/1');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should cancel a reservation', async () => {
    const res = await request(app).delete('/api/reservations/1');
    expect(res.statusCode).toBe(204);
  });
});
