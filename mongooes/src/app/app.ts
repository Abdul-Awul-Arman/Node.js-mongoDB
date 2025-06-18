import express, { Application, Request, Response } from 'express';
import notesRouter from './controllers/notes.controllers';
import userRouter from './controllers/user.contrllers';
const app:Application=express();

 app.use(express.json())

 app.use("/notes",notesRouter)
 app.use("/user",userRouter)
 



export default app;