import express, { Application, Request, Response } from 'express';
import notesRouter from './controllers/notes.controllers';
const app:Application=express();

 app.use(express.json())

 app.use("/notes",notesRouter)
 



export default app;