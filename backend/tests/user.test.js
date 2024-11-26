// backend/tests/user.test.js

const request = require('supertest');
const app = require('../app');

describe('User Routes', () => {
    it('should register a new user', async () => {
        const userData = {
            username: 'testuser',
            password: 'password123',
            email: 'test@example.com',
        };
        const res = await request(app).post('/api/v1/users/register').send(userData);
        expect(res.statusCode).toEqual(201);
        expect(res.body.username).toEqual(userData.username);
    });
});