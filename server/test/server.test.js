const app = require('../server');
const testServer = require('supertest');

describe('Testing /profile', () => {
    test('It should connect successfully', () => {
        testServer(app).get('/api/profile')
            .then((response) => {
                expect(response.statusCode).toBe(204)
            })
    })
})