/* eslint-disable no-console */
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import assert from "node:assert";
import request from 'supertest';

import { BackendApp } from '@apps/backend/BackendApp';
import { EnvironmentArranger } from "@tests/contexts/shared/infrastructure/arranger/EnvironmentArranger";
import { arranger } from "@tests/contexts/shared/infrastructure/dependencies/dependencies";
import { createFakeUsers } from '../utils/utils';

let _request: request.Test;
let application: BackendApp;
let _response: request.Response;
let environmentArranger: EnvironmentArranger;

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

// Find

Then('the response should not be empty', () => {
    assert.strict.notDeepEqual(_response.body, {});
});

Then('the response body should be an empty array', () => {
    assert.strict.deepEqual(_response.body, []);
})

Then('the reponse body should be an array with length more than {int}', (lengh: number) => {
    assert.strict.equal(Array.isArray(_response.body), true);
    assert.strict.equal(_response.body.length >= lengh, true);
});

Then('the returned object id should be {string}', (id: string) => {
    assert.strict.equal(_response.body.id, id);
});

Given('I send a DELETE request to {string}', (route: string) => {
    _request = request(application.httpServer)
        .delete(route);
});

Given('I send a POST request to {string} with body:', (route: string, body: string) => {
    _request = request(application.httpServer)
        .post(route)
        .send(JSON.parse(body) as object);
});

Then('the response should be:', async response => {
    const expectedResponse = JSON.parse(response);
    _response = await _request;
    assert.strict.deepEqual(_response.body, expectedResponse);
})

BeforeAll(async () => {
    environmentArranger = arranger;
    await environmentArranger.arrange();
    await createFakeUsers();
    application = new BackendApp();
    await application.start();
});

AfterAll(async () => {
    await environmentArranger.arrange();
    await environmentArranger.close();
    await application.stop();
});
