const server = require('./server');
const request = require('supertest');

describe('make sure server is running', () => {
    let res;
    test('returns 200', async () => {
        res = await request(server).get('/');
        expect(res.status).toBe(200);
    })

    test('should return JSON', async () => {
        res = await request(server).get('/');
        expect(res.type).toBe('application/json');
    })

    test('should return {message: api up}',async () => {
        res = await request(server).get('/');
        expect(res.body).toEqual({message: "api up"})
    })
})