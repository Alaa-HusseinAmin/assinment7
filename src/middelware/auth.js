import jwt from "jsonwebtoken";

export const userAuth =(req,res,next)=>{
    const token=req.header('token')
    console.log(token);
    jwt.verify(token,"alaa",async function(err,decoded){
        if(err){
            res.json({message:"error in token or token not provided",err})
        }else{
            req.userId=decoded.userId
            next()
        }
    })
}