import mongoose from "mongoose";

const ApplicationSchema = mongoose.Schema({
    name:String,
    email:String,
    age:String,
    phone:String,
    address:String,
    pname:String,
    duration:String
    

},
{
    timestamps:true,
})

const ApplicationModel = mongoose.model("application", ApplicationSchema);

export default ApplicationModel;