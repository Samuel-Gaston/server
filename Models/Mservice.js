import mongoose from "mongoose";

const ServiceSchema = mongoose.Schema({
    name:String,
    description:String,
    fee:String,
}, {
    timestamps:true
})


const ServiceModel = mongoose.model("service", ServiceSchema);

export default ServiceModel;