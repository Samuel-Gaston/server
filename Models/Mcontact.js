import mongoose from "mongoose";


const ContactSchema = mongoose.Schema({
    name:String,
    email:String,
    message:String
},
{
    timestamps:true,
})

const ContactModel = mongoose.model("contact", ContactSchema);

export default ContactModel;