// backend/tests/admin.test.js

const request = require('supertest');
const app = require('../app'); // Assuming app is exported from app.js

describe('Admin Routes', () => {
    it('should retrieve all users', async () => {
        const res = await request(app).get('/api/v1/admin/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});