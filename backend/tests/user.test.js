const request = require('supertest');
const app = require('../app');

describe('User Management', () => {
  it('should register a new user', async () => {
    const newUser = {
      username: 'testuser',
      password: 'testpassword',
    };
    const res = await request(app).post('/api/users/register').send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe(newUser.username);
  });

  it('should log in a user', async () => {
    const credentials = {
      username: 'testuser',
      password: 'testpassword',
    };
    const res = await request(app).post('/api/users/login').send(credentials);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should get user profile', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe('testuser');
  });

  it('should update user profile', async () => {
    const updatedUser = {
      userId: 1,
      username: 'updateduser',
      password: 'newpassword',
    };
    const res = await request(app).put('/api/users/update').send(updatedUser);
    expect(res.statusCode).toBe(200);
    expect(res.body.username).toBe(updatedUser.username);
  });
});
