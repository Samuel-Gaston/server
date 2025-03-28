import mongoose from 'mongoose';


const DeliverySchema = mongoose.Schema({
    name:String,
    pname:String,
    location:String,
    date:String
},
{
    
    timestamps:true,
});

const DeliveryModel = mongoose.model("deliveries", DeliverySchema);

export default DeliveryModel;
