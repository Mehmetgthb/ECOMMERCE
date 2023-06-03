const { verifyToken, UserandAdmin, AdminAcces } = require("./verify");
const Cryptojs=require("crypto-js")
const User=require("../models/User")

const router=require("express").Router();




//put  a User
router.put("/:id",UserandAdmin,async (req,res)=>{
 
    if(req.body.password){
        req.body.password=Cryptojs.AES.encrypt(req.body.password,process.env.pass_sec).toString()
        
    }
    

    try{
        const updatedUser= await User.findByIdAndUpdate(req.params.id,{

            $set:req.body
        },{new:true})
        res.status(200).json(updatedUser.username+ " uptated")
    }
     
    catch(err){
        res.status(500).json(err)
    }

})

//Delete a User 
router.delete("/:id",UserandAdmin,async(req,res)=>{
try{
  
  
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json("User has been deleted")
}
catch(err){
res.status(500).json(err)
}

})

//Get User
router.get("/find/:id",AdminAcces,async(req,res)=>{
    try{
      
      
        const user=await User.findById(req.params.id)
        const {password,...others}=user._doc
        res.status(200).json(others)
    }
    catch(err){
    res.status(500).json(err)
    }
    
    })
    //Get all users
    router.get("/",AdminAcces,async(req,res)=>{
        
        const query=req.query.new
        
        
        try{
          const users=query? await User.find().sort({_id:-1}).limit(5):await User.find()
            
            res.status(200).json(users)
        }
        catch(err){
        res.status(500).json(err)
        }
        
        })

module.exports=router;