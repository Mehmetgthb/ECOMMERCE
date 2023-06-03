const router=require("express").Router()
const { verifyToken, UserandAdmin, AdminAcces } = require("./verify");

const Cart=require("../models/Cart");





//create a Cart

router.post("/",verifyToken,async (req,res)=>{
    const newCart=new Cart(req.body)
   

    try{
     const savedCart=await newCart.save()
     res.status(200).json(savedCart)
    }
    catch(err){
        res.status(500).json(err)
    }
})


//put  a Cart
router.put("/:id",UserandAdmin,async (req,res)=>{
 
    try{
        const updatedCart= await Cart.findByIdAndUpdate(req.params.id,{

            $set:req.body
        },{new:true})
        res.status(200).json(updatedCart)
    }
     
    catch(err){
        res.status(500).json(err)
    }

})

//Delete a Cart
router.delete("/:id",UserandAdmin,async(req,res)=>{
try{
  
  
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json("Cart has been deleted")
}
catch(err){
res.status(500).json(err)
}

})

//Get user Cart
router.get("/find/:id",UserandAdmin,async(req,res)=>{
    try{
      
      //acctually this is userid UserandAdmin use that as just id
      //you first get cart with userid then you can do other operation(delete uptade)
        const cart=await Cart.find({userId:req.params.id})
        
        res.status(200).json(cart)
    }
    catch(err){
    res.status(500).json(err)
    }
    
    })
    //Get all Cart
    router.get("/",AdminAcces,async(req,res)=>{
    try{


        const carts=await Cart.find()
        res.status(200).json(carts)
    }
    catch(err){


        res.status(500).json(err)
    }



    })


module.exports=router