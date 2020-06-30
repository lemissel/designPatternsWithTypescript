"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
var singleton_1 = require("./singleton");
function client() {
    var singleton1 = singleton_1.Singleton.getInstance();
    var singleton2 = singleton_1.Singleton.getInstance();
    if (singleton1 === singleton2) {
        console.log('Singleton works, you have the same instance');
    }
    else {
        console.log('Singleton failed, you have a different instances');
    }
}
exports.client = client;
client();
