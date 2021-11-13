"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateFileController = /** @class */ (function () {
    function CreateFileController(service) {
        this.service = service;
    }
    CreateFileController.prototype.handle = function (req, response) {
        this.service.save(__assign({}, req.body));
        return response.status(200).send('done');
    };
    return CreateFileController;
}());
exports.default = CreateFileController;
