"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-console */
const node_assert_1 = __importDefault(require("node:assert"));
const cucumber_1 = require("@cucumber/cucumber");
const supertest_1 = __importDefault(require("supertest"));
const BackendApp_1 = require("../../../../../src/apps/backend/BackendApp");
let _request;
let application;
let _response;
(0, cucumber_1.Given)('I send a GET request to {string}', (route) => {
    _request = (0, supertest_1.default)(application.httpServer).get(route);
});
(0, cucumber_1.Then)('the response status should be {int}', (status) => __awaiter(void 0, void 0, void 0, function* () {
    _response = yield _request.expect(status);
}));
(0, cucumber_1.Given)('I send a PUT request to {string} with body:', (route, body) => {
    _request = (0, supertest_1.default)(application.httpServer)
        .put(route)
        .send(JSON.parse(body));
});
(0, cucumber_1.Then)('the response status code should be {int}', (status) => __awaiter(void 0, void 0, void 0, function* () {
    _response = yield _request.expect(status);
}));
(0, cucumber_1.Then)('the response should be empty', () => {
    node_assert_1.default.deepStrictEqual(_response.body, {});
});
(0, cucumber_1.Then)('the response body should contain {string} error', (errorName) => __awaiter(void 0, void 0, void 0, function* () {
    (0, node_assert_1.default)(_response.body.errors.some(error => Object.keys(error).includes(errorName)));
}));
(0, cucumber_1.BeforeAll)(() => {
    application = new BackendApp_1.BackendApp();
    application.start().catch(console.error);
});
(0, cucumber_1.AfterAll)(() => {
    application.stop().catch(console.error);
});
