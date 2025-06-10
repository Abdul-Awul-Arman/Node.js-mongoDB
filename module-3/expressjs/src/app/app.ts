import { Application, Request, Response } from "express"
import path from "path"
import fs from 'fs'
import { json } from "stream/consumers"
import todosRouter from "./todo/todo.routers"



const express = require('express')
const app:Application = express()

// app.use(express.json());
app.use("/todos",todosRouter);

app.get('/', (req:Request, res:Response) => {
  res.send('Bismillah ,This is express ')
})



    

export default app;
