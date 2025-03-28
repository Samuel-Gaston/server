import dotenv from 'dotenv';
import OrderModel from '../Models/Morder.js';

dotenv.config();

const getOrders = async(req, res)=>{

    try {
       const order = await OrderModel.find(); 
        res.status(200).json(order);
    
    } catch (error) {
     res.status(500).json(error);   
    }
}

const getOrder = async(req, res) =>{
           const {id} = req.params;
           try {
            const order = await OrderModel.findById(id);
            if(order){
              res.status(200).json(order);
            }
            else{
              res.status(400).json({msg:"Not found"});
            }
           } catch (error) {
            res.status(500).json(error)
           }
}

const addOrder = async(req, res) =>{
    const {name, phone, address, Pname, quantity, date, cdate} = req.body;
    try {
      const order = new OrderModel({name, phone, address, Pname, quantity, date, cdate});
      await order.save();
      res.status(200).json({msg:"Order Sent Successfully"});
       
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteOrder = async(req, res) =>{
    const {id} = req.params;
    try {
      const order = await OrderModel.findByIdAndDelete(id);
      if(order){
        res.status(200).json({msg:"order deleted"})
      } 
      else{
        res.status(400).json({msg:"order not deleted"})
      } 
    } catch (error) {
        res.status(500).json(error);
    }
}

export {getOrders, addOrder, deleteOrder, getOrder};