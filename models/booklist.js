const mongoose=require("mongoose")

const bookschema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ISBN:{
        type:Number,
        required:true,
    },
    author:{
        type:String,required:true,
    },
    publisheddate:{
        type:Date
    },
    publisher:{
        type:String
    }},{timestamps:true
})
module.exports=mongoose.model("book",bookschema)