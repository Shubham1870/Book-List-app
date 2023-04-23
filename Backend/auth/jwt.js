const jwt=require("jsonwebtoken")

const auth=((req,res,next)=>{
    const Token=req.headers.authorisation

    jwt.verify(Token,process.env.SECRET_key,function(err,decoded){
        if(err){
            return res.status(400).json({
                message:"Token expired",
                error:err.message
            })
        }
        req.user=decoded.data
        console.log(req.user,requser)
        next()
    })
})
module.exports=auth