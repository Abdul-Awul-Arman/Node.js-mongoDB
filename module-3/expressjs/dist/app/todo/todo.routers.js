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
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const mongodb_2 = __importDefault(require("../../config/mongodb"));
const todosRouter = express_1.default.Router();
todosRouter.use(express_1.default.json());
todosRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const db = yield mongodb_2.default.db("todosDB");
    const collection = yield db.collection("todos");
    const todos = yield collection.find({}).toArray(); // FIXED HERE
    res.json(todos);
}));
todosRouter.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, description, priority, isCompleted } = req.body;
    const db = yield mongodb_2.default.db("todosDB");
    const collection = yield db.collection("todos");
    collection.insertOne({
        title, description, priority, isCompleted
    });
    const todos = yield collection.find({}).toArray(); // FIXED HERE
    res.json(todos);
}));
todosRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_2.default.db("todosDB");
    const collection = yield db.collection("todos");
    const todo = yield collection.findOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(todo);
    console.log(todo);
}));
todosRouter.put("/update-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { title, description, priority, isCompleted } = req.body;
    const id = req.params.id;
    const db = yield mongodb_2.default.db("todosDB");
    const collection = yield db.collection("todos");
    let filter = { _id: new mongodb_1.ObjectId(id) };
    const updatedTodo = yield collection.updateOne(filter, { $set: { title, description, priority, isCompleted } }, { upsert: true });
    res.json(updatedTodo);
}));
todosRouter.delete("/delete-todo/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const db = yield mongodb_2.default.db("todosDB");
    const collection = yield db.collection("todos");
    const todo = yield collection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
    res.json(todo);
}));
exports.default = todosRouter;
