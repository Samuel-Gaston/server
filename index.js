import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';

import UserRouter from './Routes/Ruser.js';
import ApplicationRouter from './Routes/Rapplication.js';
import ContactRouter from './Routes/Rcontact.js';
import AdminRouter from './Routes/Radmin.js';
import OrderRouter from './Routes/Rorder.js';
import ProductRouter from './Routes/Rproduct.js';
import ServiceRouter from './Routes/Rservice.js';
import DeliveryRouter from './Routes/Rdelivery.js';

dotenv.config();
const app = express();
app.use(cors({
    origin: "exp://192.168.43.187:8081",
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());

const Port = process.env.PORT || 5000;
const DB_URL = process.env.DB_URL;
let server = null;

mongoose
.connect(DB_URL).then(() =>{
    server = app.listen(Port, () => console.log(`server running on port http://localhost:${Port}`))
}) 
.catch((error) => console.log(error));
const io = new Server(server);

app.get("/",(req,res)=> res.send("hello api "));
app.use("/user", UserRouter);
app.use("/application", ApplicationRouter);
app.use("/contact", ContactRouter);
app.use("/admin", AdminRouter);
app.use("/order", OrderRouter);
app.use("/product", ProductRouter);
app.use("/service", ServiceRouter);
app.use("/deliveries", DeliveryRouter);

