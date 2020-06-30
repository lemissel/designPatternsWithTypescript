// const Singleton = require('../dist/singleton/singleton');
import { Singleton } from './singleton';

describe("Singleton", () => {

    let singleton1: Singleton, singleton2: Singleton;

    beforeEach(() => {
        singleton1 = Singleton.getInstance();
        singleton2 = Singleton.getInstance();
    });

    it("Should have the same object instance", () => {


        expect(singleton1).toBe(singleton2);
    })

});