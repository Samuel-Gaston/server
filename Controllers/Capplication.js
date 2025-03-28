import dotenv from 'dotenv';
import ApplicationModel from '../Models/Mapplication.js';

dotenv.config();

const getApplication = async(req, res)=>{
 
    try {
        const application = await ApplicationModel.find();
      
            res.status(200).json(application);
       
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}

const addApplication = async(req, res) =>{
    const {name, email, age, phone, address, pname, duration}= req.body;
   
    try {
        const existEmailPhone = await ApplicationModel.findOne({email, phone});
        if(existEmailPhone){
            res.status(200).json({msg:"User already exist"})
        }
        else{
       const service = new ApplicationModel({name, email, age, phone, address, pname, duration});
       await service.save();
       res.status(201).json({msg:"Application Submitted Successfully"});
        }
    } catch (error) {
      res.status(500).json(error);   
    }
}

const deleteApplication = async(req, res) =>{
    const {id} =req.params;
    try {
       const application = await ApplicationModel.findByIdAndDelete(id);
       if(application){
        res.status(200).json({msg:"deleted application"});
       } 
       else{
        res.status(400).json({msg:"not deleted"});
       }
    } catch (error) {
        res.status(500).json(error);
    }
}

export {getApplication, addApplication, deleteApplication};