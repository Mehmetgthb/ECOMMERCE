const router=require("express").Router()
const User=require("../models/User")
const CryptoJS=require("crypto-js")
const jwt=require("jsonwebtoken")



//REGISTER

router.post("/register",async (req,res)=>{

    const newUser= new User({

      username:req.body.username,
      email:req.body.email,
      password: CryptoJS.AES.encrypt(req.body.password,process.env.pass_sec).toString()
    }) 
try{
   const savedUser= await newUser.save()
   res.status(201).json(savedUser)


   console.log(savedUser)
}
catch(err){
    res.status(500).json(err)
}

})

//login

router.post("/login",async(req,res)=>{
     try{
     const user= await User.findOne({username:req.body.username}) // sorgu  şeklinde yapılır({})
      !user && res.status(401).json("wrong user")
  
      const userPassword=CryptoJS.AES.decrypt(user.password,process.env.pass_sec)
      const orgpassword=userPassword.toString(CryptoJS.enc.Utf8)

      orgpassword !==req.body.password && res.status(401).json("wrong pass")

      const { password,...others}=user._doc
      const token=jwt.sign({
        id:user.id,
        isAdmin:user.isAdmin,
      },process.env.token_key,{expiresIn:"3d"}
      )
      
      res.status(200).json({...others,token}) // birden fazla degısken gönderiyorsak böyle kullanmalıyız ({}) 
      
}

catch{
  res.status(500).json("err")
}
      
     



})











module.exports=router