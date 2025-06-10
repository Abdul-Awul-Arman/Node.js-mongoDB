"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_routers_1 = __importDefault(require("./todo/todo.routers"));
const express = require('express');
const app = express();
// app.use(express.json());
app.use("/todos", todo_routers_1.default);
app.get('/', (req, res) => {
    res.send('Bismillah ,This is express ');
});
exports.default = app;
