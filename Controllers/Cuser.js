import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import UserModel from '../Models/Muser.js';
import jwt from 'jsonwebtoken';

dotenv.config();

const getJWT = (id, name, email) =>{
    const Token = jwt.sign({id, name, email}, process.env.JWTsecret,{
        expiresIn:"30d",
    });
    return Token;
};

//getting all users
const getUsers = async(req, res) =>{
    
    try {
      const users = await UserModel.find();
   res.status(200).json(users);  
     
    } catch (error) {
        res.status(500).json(error);
    }
}


//adding a user
const addUser = async(req, res) =>{
    const {name, email, password, cpassword} = req.body;
    try {
   const existEmail = await UserModel.findOne({name, email, password, cpassword});
   if(existEmail){
    res.status(400).json({msg:"User already exist"});
   }
   else{
    // const Salt = await bcrypt.genSalt(10);
    // const hashpassword = await bcrypt.hash(password, Salt);
    // const hashcpassword = await bcrypt.hash(cpassword, Salt);
    const user = new UserModel({name, email ,password, cpassword});
    await user.save();
    const Token = getJWT(user._id, user.name, user.email);
    res.cookie("DefenseToken", Token);
    res.status(201).json({msg:"Registered Sucessfully"})
   }
    } catch (error) {
        res.status(500).json(error);
    }
}

// auth users
const authUser = async(req, res) =>{
  const { email, password} = req.body;
  try {
    const existUser = await UserModel.findOne({email, password});

    if(existUser){
        const isvalid = await (password, existUser.password);
        if(isvalid){
            const Token =  getJWT(existUser._id, existUser.name, existUser.email);
        res.cookie("DefenseToken", Token);
        res.status(200).json({msg:"Login Successfully",data:{name:existUser.name,email:existUser.email}});
        } else{
            res.status(400).json({msg:"Invalid email or password"});
        } }
   else{
        res.status(400).json({msg:"invalid email or password"});
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


export {addUser, getUsers, authUser};