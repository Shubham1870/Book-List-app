const express=require("express")
const router=express.Router()
const book=require("../models/booklist")

router.get("/books",async (req,res)=>{
    const data=await book.find().populate({
        path:"user"
    }).sort({createdAt:-1})
    return res.status(200).json({
        message:"success",
        data
    })
})
router.post("/books",async (req,res)=>{
    const {title,ISBN,author,publisher}=req.body

    const data=await book.create({
        title,
        ISBN,
        author,
        publisher
    })
    return res.statusCode(200).json({
        status:"success",
        data
    })
})

router.put("/books/:id",async (req,res)=>{
    const id=req.params.id
    const {title,ISBN,author,publisher}=req.body
    const data=await book.findByIdAndUpdate(
        id,{
            $set:{
                title,
                ISBN,
                author,
                publisher
            }
        }
    )
    return res.status(200).json({
        status:"success",
        data
    })
})

router.delete("/books/:id",async (req,res)=>{
    const id=req.params.id
    const {title,ISBN,author,publisher}=req.body
    const data=await book.findByIdAndDelete(
        id
    )
    return res.status(200).json({
        status:"success",
        data
    })
})