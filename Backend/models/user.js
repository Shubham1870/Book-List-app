const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    }
)
module.exports=mongoose.model("users",userschema)
