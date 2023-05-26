const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:String,
    age:Number,
    branch:String
})
const UserModel=mongoose.model("User",UserSchema);
module.exports=UserModel;
