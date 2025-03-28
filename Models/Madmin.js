import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    password:String
},
{
    timestamps:true
}
)
const adminModel = mongoose.model('admin', adminSchema);

export default adminModel;