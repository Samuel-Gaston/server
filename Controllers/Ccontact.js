import dotenv from 'dotenv';
import ContactModel from "../Models/Mcontact.js";


dotenv.config();

const genJWT = (id, name, email, isAdmin) =>{
    const Token = jwt.sign({id, name, email, isAdmin}, process.env.Jwtsecret, {
       expiresIn:"30d"
    });
    return Token;
};


const getContact = async(req, res) =>{
    try {
        const contact = await ContactModel.find();
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json(error);
    }
}

const addContact = async(req, res) =>{
    const {name, email, message} = req.body;
    try {
        const contact = new ContactModel({name, email ,message});
        await contact.save();
        res.status(200).json({msg:"Message Sent Successfully"});
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteContact = async(req,res) =>{
    const {id} = req.params;
    try {            
       const contact = await ContactModel.findByIdAndDelete(id);
      if(contact){
        res.status(200).json({msg:"Message deleted"})
      }
      else{
        res.status(400).json({msg:"already deleted"})
      }
        }
     catch (error) {
        res.status(500).json(error);
    }
}

const deleteAllContact = async(req, res) =>{
   
    try {
      const contact = await ContactModel.deleteMany().exec();
      if(contact){
        res.status(200).json({msg:"deleted all"});
      }  
      else{
        res.status(400).json({msg:"not deleted"});
      }
    } catch (error) {
        res.status(500).json(error);
    }
}

export {addContact, getContact, deleteContact, deleteAllContact};