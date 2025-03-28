import express from 'express';
import { admin, addAdmin, authAdmin } from '../Controllers/Cadmin.js';

const Route = express.Router();


Route.get("/", admin);
Route.post("/", addAdmin);
Route.post("/auth", authAdmin);

export default Route;