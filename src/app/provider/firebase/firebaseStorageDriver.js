"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { initializeApp } from "firebase/app";
var app_1 = require("@firebase/app");
var firebase_credentials_1 = __importDefault(require("../../../config/firebase-credentials"));
var firebase = (0, app_1.initializeApp)(firebase_credentials_1.default);
exports.default = firebase;
