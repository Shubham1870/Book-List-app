const express=require("express")
const app=express()
const cors=require("cors")
const PORT=8000
const dotenv=require("dotenv")
const connection=require("./db/connection")()
const Userroute=require("./routes/user")
const Bookroute=require("./routes/book")
const auth=require("./auth/jwt")
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())




app.use("/",Userroute)
app.use("/",Bookroute)
app.listen(PORT,()=>{console.log("server is up and running")})