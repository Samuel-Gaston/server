import express from 'express';
import { getOrders, addOrder, deleteOrder, getOrder } from '../Controllers/Corder.js';


const Route = express.Router();

Route.get("/", getOrders);
Route.post("/", addOrder);
Route.delete("/:id", deleteOrder);
Route.get("/:id", getOrder);


export default Route; 