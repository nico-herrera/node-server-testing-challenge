const server = require('../server');
const request = require('supertest');
const db = require('../../data/dbConfig');

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

beforeEach(async () => {
    await db('users').truncate();
    // await db.seed.run();
});

afterAll(async () => {
    await db.destroy();
});

describe('users router tests', () => {
    describe('user POST tests', () => {
        let res;
        const nico = { username: "nico" }

        test("user can be inserted", async () => {

            res = await request(server).post('/api/users').send(nico);
            expect(res.body.username).toEqual('nico')
        })

        test('returns 201 status', async () => {
            res = await request(server).post('/api/users').send(nico);
            expect(res.status).toBe(201);
            expect(res.status).not.toBe(200);
        })
    })

    describe('user DELETE tests', () => {
        let res2;
        beforeEach(async () => {
        let res2 = await request(server).post('/api/users').send({username: "hello"});
        console.log(res2.body)
        });
    
        test('user can be deleted', async () => {
            res2 = await request(server).delete('/api/users/1')
            expect(res2.body).toEqual({})
        })

        test('return 204', async () => {
            res2 = await request(server).delete('/api/users/1')
            console.log(res2.status)
            expect(res2.status).toBe(204)
        })
    })

})