import express from 'express';
import { addApplication, getApplication, deleteApplication } from '../Controllers/Capplication.js';

const Route = express.Router();

Route.get("/", getApplication);
Route.post("/", addApplication);
Route.delete("/:id", deleteApplication)


export default Route;