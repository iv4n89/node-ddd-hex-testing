/* eslint-disable no-console */
import assert from "node:assert";
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';

import { BackendApp } from '@apps/backend/BackendApp';

let _request: request.Test;
let application: BackendApp;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
    _request = request(application.httpServer).get(route);
});

Then('the response status should be {int}', async (status: number) => {
    _response = await _request.expect(status);
});

Given('I send a PUT request to {string} with body:', (route: string, body: string) => {
    _request = request(application.httpServer)
        .put(route)
        .send(JSON.parse(body) as object);
});

Then('the response status code should be {int}', async (status: number) => {
    _response = await _request.expect(status);
})

Then('the response should be empty', () => {
    assert.deepStrictEqual(_response.body, {});
});

Then('the response body should contain {string} error', async (errorName: string) => {
    assert(_response.body.errors.some((error: { [field: string]: string }) => Object.keys(error).includes(errorName)));
});

BeforeAll(() => {
    application = new BackendApp();
    application.start().catch(console.error);
});

AfterAll(() => {
    application.stop().catch(console.error);
})
