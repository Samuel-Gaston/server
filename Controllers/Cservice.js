import dotenv from 'dotenv';
import ServiceModel from '../Models/Mservice.js';

dotenv.config();


const getService = async(req,res) =>{

    try {
       const service = await ServiceModel.find();
       res.status(200).json(service);
    } catch (error) {
        res.status(500).json(error)
    }
}

const addService = async(req, res) =>{
    const {name, description, fee} = req.body;
    try {
        const ExistService = await ServiceModel.findOne({name, description})
        if(ExistService){
            res.status(400).json({msg:"Service Exist Already"});
        }
        else{
       const service = new ServiceModel({name,description, fee});
       await service.save();
       res.status(200).json({msg:"Service added Successfully"})
        } 
    } catch (error) {
        res.status(500).json(error);
    }
}

export {getService, addService}