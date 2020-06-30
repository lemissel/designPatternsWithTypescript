"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
var Singleton = /** @class */ (function () {
    // Intentionally marked to private modificator for prevent direct construction calls with the new operator
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
exports.Singleton = Singleton;
