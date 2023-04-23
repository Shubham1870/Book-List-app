const mongoose=require("mongoose")

const Connection=()=>{
  mongoose.connect(process.env.DATABASE_URI).then(res=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports=Connection