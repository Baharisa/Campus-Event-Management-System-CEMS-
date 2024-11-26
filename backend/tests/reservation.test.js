// backend/tests/reservation.test.js

const request = require('supertest');
const app = require('../app');

describe('Reservation Routes', () => {
    it('should create a new reservation', async () => {
        const reservationData = {
            userId: 'some-user-id',
            eventId: 'some-event-id',
        };
        const res = await request(app).post('/api/v1/reservations').send(reservationData);
        expect(res.statusCode).toEqual(201);
    });
});