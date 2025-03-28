import express from 'express';
import { getContact, addContact, deleteContact, deleteAllContact } from '../Controllers/Ccontact.js';

const Route = express.Router();

Route.get("/",getContact);
Route.post("/", addContact);
Route.delete("/:id", deleteContact)
Route.delete("/",deleteAllContact);




export default Route;