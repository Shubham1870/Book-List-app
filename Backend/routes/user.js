const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const user=require("../models/user")



router.post("/signup",async (req,res)=>{
    const {email,password,confirmpassword}=req.body
const data=await user.find({email})
console.log(data)

if(data){
    return res.status(400).json({
        status:"error",
        message:"user already registered"
    })
}
if(password!==confirmpassword){
    return res.status(400).json({
        status:"error",
        message:"password do not match with confirmpassword"
    })
}
const salt = await bcrypt.genSalt(10);
bcrypt.hash(password, salt, async function (err, hash) {
    if(err){
        return res.status(400).json({
    status:"error",
    message:err.message
        })
    }
    const info=await user.create({
        email,
        password:hash
    })
    return res.status(200).json({
        status:"success",
        info
    })
})
})

router.post("/signin",async (req,res)=>{
    const {email,password}=req.body
    const data=await user.find({email})
    if(!data){
        return res.status(400).json({
            status:"failed",
            message:"user not registered"
        })
    }
    bcrypt.compare(password,data[0].password,async function(err,result){
        if(err){
            return res.status(400).json({
                status:"error",
                message:err.message

            })
        }
        if(result){
            let token=jwt.sign({
                exp:Math.floor(Date.now()/1000)+(60*60*24),
                data:data[0]._id
            },process.env.SECRET_key)
            return res.status(200).json({
                message:"login successfull",
                token,id:data[0].id
            })
        }else{
            return res.status(400).json({
                status:"failed",
                message:"Wrong password"
            })
        }
    })
})