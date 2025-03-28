import express from 'express';
import { getService, addService } from '../Controllers/Cservice.js';

const Route = express.Router();

Route.get("/", getService);
Route.post("/", addService);


export default Route;