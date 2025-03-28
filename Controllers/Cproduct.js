import dotenv from 'dotenv';
import ProductModel from '../Models/Mproduct.js';


dotenv.config();


const getProducts = async(req, res) =>{
    try {
      const product = await ProductModel.find();
      res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}


const addProduct = async(req, res) =>{
    const { name, description, price} = req.body;
    try {
        const ExistProduct = await ProductModel.findOne({name, description});
        if(ExistProduct){
            res.status(400).json({msg:"Product Already Exist"});
        }
        else{
            const product = new ProductModel({ name, description, price});
            await product.save();
            res.status(200).json({msg:"Product added successfully"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export {getProducts, addProduct};