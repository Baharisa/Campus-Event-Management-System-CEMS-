const request = require('supertest');
const app = require('../app'); // Import your Express app
const db = require('../models/db');

describe('Admin Actions', () => {
  afterAll(async () => {
    await db.pool.end(); // Close database connection after tests
  });

  it('should get all users', async () => {
    const res = await request(app).get('/api/admin/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update user role', async () => {
    const res = await request(app)
      .put('/api/admin/users/role')
      .send({ userId: 1, role: 'admin' });
    expect(res.statusCode).toBe(200);
    expect(res.body.role).toBe('admin');
  });

  it('should delete a user', async () => {
    const res = await request(app).delete('/api/admin/users/1');
    expect(res.statusCode).toBe(204);
  });
});
