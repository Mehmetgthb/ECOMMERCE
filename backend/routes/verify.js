const jwt =require("jsonwebtoken")



const verifyToken=(req,res,next)=>{
    const authHeader=req.headers.token
  
    if(authHeader){
        const token=authHeader.split(" ")[1]
        jwt.verify(token,process.env.token_key,(err,user)=>{
            if(err) res.status(403).json("token is not valid")
            req.user=user
            next()

        })

    }

    else{
        return res.status(401).json("you are not authenticated")
    }

}


const UserandAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id==req.params.id || req.user.isAdmin) {next()}
        else{res.status(403).json("youu are not allowed")}
    })
}


const AdminAcces=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin==true){
        next()}
        else {res.status(403).json("you are not allowed")}
    })


}
module.exports={verifyToken,UserandAdmin,AdminAcces}