import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    // image:Array,
    name:String,
    description:String,
    price:String,
    
},
{
    timestamps:true
})

const ProductModel = mongoose.model("product", ProductSchema);

export default ProductModel;