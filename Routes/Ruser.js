import express from 'express';
import { addUser, getUsers, authUser } from '../Controllers/Cuser.js';


const Route = express.Router();

Route.get("/", getUsers);
Route.post("/", addUser);
Route.post("/auth", authUser);




export default Route;