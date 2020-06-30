"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const Singleton = require('../dist/singleton/singleton');
var singleton_1 = require("./singleton");
describe("Singleton", function () {
    var singleton1, singleton2;
    beforeEach(function () {
        singleton1 = singleton_1.Singleton.getInstance();
        singleton2 = singleton_1.Singleton.getInstance();
    });
    it("Should have the same object instance", function () {
        expect(singleton1).toBe(singleton2);
    });
});
