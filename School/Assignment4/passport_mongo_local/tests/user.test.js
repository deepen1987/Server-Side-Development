import { config } from 'dotenv';
import request from 'supertest';
import * as i from '../index'
config()

describe('/auth', () => {
    beforeEach(() => { i.server });
    afterEach(() => { i.server.close() });

    describe('POST /', () => {
        it('It should Create a User.', async () => {
            const res = await request(i.server).post('/auth/signup')
                .send({
                    userName: 'nil',
                    password: '12345678',
                    email: 'nil@n.com'
                })
                .accept('Content-Type', 'application/x-www-form-urlencoded');

            expect(res.body.status).toBe('success');
        });
    });

    describe('POST /', () => {
        it('It should get the login confirmation.', async () => {
            const res = await request(i.server).post('/auth/login')
                .send({
                    userName: 'nil',
                    password: '12345678',
                    email: 'nil@n.com'
                })
                .accept('Content-Type', 'application/x-www-form-urlencoded');

            expect(res.body.status).toBe('success');
        });
    });

    describe('GET /', () => {
        it('It should get the login confirmation and then check for worthyness.', async () => {
            const resLogin = await request(i.server).post('/auth/login')
                .send({
                    userName: 'nil',
                    password: '12345678',
                    email: 'nil@n.com'
                })
                .accept('Content-Type', 'application/x-www-form-urlencoded');

            const cookie = resLogin.body.token

            const res = await request(i.server).get('/auth/amiworthy').set({ Cookie: `jwt=${cookie}` });
            expect(res.body.data.message).toBe('Congratulations');
        });
    });

    describe('PUT /', () => {
        it('It should reset the password.', async () => {
            const res = await request(i.server).put('/auth/resetPassword')
                .send({
                    userName: 'nil',
                    password: '12345678',
                    email: 'nil@n.com',
                    newPassword: '789456123'
                })
                .accept('Content-Type', 'application/x-www-form-urlencoded');

            expect(res.body.status).toBe('success');
        });
    });

    describe('POST /', () => {
        it('It should get the login confirmation.', async () => {
            const res = await request(i.server).post('/auth/login')
                .send({
                    userName: 'nil',
                    password: '789456123',
                    email: 'nil@n.com'
                })
                .accept('Content-Type', 'application/x-www-form-urlencoded');

            expect(res.body.status).toBe('success');
        });
    });

    describe('DELETE /', () => {
        it('It would delete the user account from the database.', async () => {
            const res = await request(i.server).delete('/auth/deleteAccount')
                .send({
                    userName: 'nil',
                    password: '789456123',
                    email: 'nil@n.com'
                })
                .accept('Content-Type', 'application/x-www-form-urlencoded');

            expect(res.body.data.message).toBe('Account Deleted Successfully.');
        })
    })
});