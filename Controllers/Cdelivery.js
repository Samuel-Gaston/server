import express from 'express';
import dotenv from 'dotenv';
import DeliveryModel from '../Models/Mdelivery.js';
dotenv.config();


const getDelivery = async(req, res) =>{
    try {
      const delivery =  await DeliveryModel.find();
        res.status(200).json(delivery); 
    } catch (error) {
        res.status(500).json(error);
    }
}


const addDelivery = async(req, res) =>{
    const {name, pname, location,date} = req.body;
    try {
     const ExistDelivery = await DeliveryModel.findOne({name,pname});
     if(ExistDelivery){
        res.status(200).json({msg:"Delivery already sent"});
     }
     else{
        const delivery = new DeliveryModel({name, pname, location, date});
        await delivery.save();
        res.status(200).json({msg:"Delivery Message Sent Successfully"});
     }
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteDelivery = async(req, res) =>{
    const {id} = req.params;

    try {
       const delivery = await DeliveryModel.findByIdAndDelete(id);
       if(delivery){
        res.status(200).json({msg:"Delete Successfully"});
       } 
       else{
        res.status(400).json({msg:"Failed to Delete"});
       }
    } catch (error) {
        res.status(500).json(error)
    }
}


export {getDelivery, addDelivery, deleteDelivery};