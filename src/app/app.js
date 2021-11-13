"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes/routes"));
var App = /** @class */ (function () {
    function App() {
        this.express = (0, express_1.default)();
        this.routes = routes_1.default;
        this.middlewares();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1.default.json());
        this.express.use(this.routes);
    };
    return App;
}());
exports.default = App;
