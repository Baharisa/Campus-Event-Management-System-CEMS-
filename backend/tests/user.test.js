const request = require('supertest');
const app = require('../app');

describe('User Routes', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/api/users/register').send({
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe('User registered');
  });
});
