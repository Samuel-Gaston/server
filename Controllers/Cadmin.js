import express from 'express';
import dotenv from 'dotenv';
import adminModel from '../Models/Madmin.js';

dotenv.config();

const getJWT = (id, password) =>{
    const Token = jwt.sign({id, password}, process.env.JWTsecret,{
        expiresIn:"30d",
    });
    return Token;
};


const admin = async(req, res) =>{
    const {page} = req.query;
    const limit = 10
    try {
      const admin = await adminModel.find().skip(page-1).limit(limit);
      if(admin.length > limit ){
        res.status(200).json({msg:"Login Success", data:admin});
      }
    } catch (error) {
        res.status(500).json(error);
    }
}

const addAdmin = async(req, res) =>{
    const {password} = req.body
    try {
        const admin = new adminModel({password});
        await admin.save();
        res.status(200).json({msg:"success"});
    } catch (error) {
        res.status(500).json(error);
    }
}


const authAdmin = async(req, res)=>{
    const {password} = req.body
    try {
        const existPassword = await adminModel.findOne({password});
        if(existPassword){
            const isvalid = await (password, existPassword.password);
            if(isvalid){
                const Token =  getJWT(existPassword._id, existPassword.password);
            res.cookie("DefenseToken", Token);
            res.status(200).json({msg:"Login Successfully",data:{password:existPassword.password}});
            } else{
                res.status(400).json({msg:"Invalid email or password"});
            } 
    } }catch (error) {
     res.status(500).json(error);   
    }
}


export {admin, addAdmin, authAdmin};