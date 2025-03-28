import express from 'express';
import { getDelivery, addDelivery, deleteDelivery } from '../Controllers/Cdelivery.js';


const Route = express.Router();

Route.get("/", getDelivery);
Route.post("/", addDelivery);
Route.delete("/:id", deleteDelivery);




export default Route;