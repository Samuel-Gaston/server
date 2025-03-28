import express from 'express';
import { getProducts, addProduct } from '../Controllers/Cproduct.js';

const Route = express.Router();



Route.get("/", getProducts);
Route.post("/", addProduct);


export default Route;