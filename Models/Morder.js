import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
    name:String,
    phone:String,
    address:String,
    Pname:String,
    quantity:String,
    date:String,
    cdate:String
    
},
{
    timestamps:true
});
const OrderModel = mongoose.model("order", OrderSchema);

export default OrderModel;