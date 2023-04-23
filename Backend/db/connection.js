const mongoose=require("mongoose")

const connection=()=>{
    mongoose.connect(process.env.DATABASE_URL).then(res=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}
module.exports=connection