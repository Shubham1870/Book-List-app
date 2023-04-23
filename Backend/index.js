const express=require("express")
const app=express()
const cors=require("cors")
const PORT=3001
const dotenv=require("dotenv").config()
const connection=require("./db/connection")
const user=require("./models/user")
const book=require("./models/booklist")
const auth=require("./auth/jwt")

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/",user)
app.use("/",book)
app.listen(PORT,()=>{console.log("server is up and running")})