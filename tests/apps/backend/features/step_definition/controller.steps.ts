/* eslint-disable no-console */
import assert from "node:assert";
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';

import { BackendApp } from '../../../../../src/apps/backend/BackendApp';

let _request: request.Test;
let application: BackendApp;
let _response: request.Response;

Given('I send a GET request to {string}', (route: string) => {
    _request = request(application.httpServer).get(route);
});

Then('the response status should be {int}', async (status: number) => {
    _response = await _request.expect(status);
});

BeforeAll(() => {
    application = new BackendApp();
    application.start().catch(console.error);
});

AfterAll(() => {
    application.stop().catch(console.error);
})
