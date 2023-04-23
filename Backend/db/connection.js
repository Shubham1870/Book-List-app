const mongoose=require("mongoose")

const Connection=()=>{
  mongoose.connect(`${process.env.DATABASE_URI}`,{useNewUrlParser:true,
    useUnifiedTopology:true}).then(res=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports=Connection