"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const todosRouter = express_1.default.Router();
const filePath = path_1.default.join(__dirname, "../../DB/todos.json");
todosRouter.get('/', (req, res) => {
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    console.log(req.query);
    res.json(data);
    console.log(data);
});
todosRouter.post("/create-todo", (req, res) => {
    const todo = req.body;
    console.log(todo);
});
todosRouter.get("/:title", (req, res) => {
    const todo = req.params;
    res.json(todo);
});
todosRouter.put("/update-todo:title", (req, res) => {
    const todo = req.params;
    res.json(todo);
});
todosRouter.delete("delete-todo /:title", (req, res) => {
    const todo = req.params;
    res.json(todo);
});
exports.default = todosRouter;
