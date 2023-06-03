const router=require("express").Router()

const { verifyToken, UserandAdmin, AdminAcces } = require("./verify");

const Product=require("../models/Product")

//create a product

router.post("/",AdminAcces,async (req,res)=>{
    const newProduct=new Product(req.body)
   

    try{
     const savedProduct=await newProduct.save()
     res.status(200).json(savedProduct)
    }
    catch(err){
        res.status(500).json(err)
    }
})




//put  a product
router.put("/:id",AdminAcces,async (req,res)=>{
 
    
    

    try{
        const updatedProduct= await Product.findByIdAndUpdate(req.params.id,{

            $set:req.body
        },{new:true})
        res.status(200).json(updatedProduct)
    }
     
    catch(err){
        res.status(500).json(err)
    }

})

//Delete a Product 
router.delete("/:id",AdminAcces,async(req,res)=>{
try{
  
  
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json("product has been deleted")
}
catch(err){
res.status(500).json(err)
}

})

//Get Product
router.get("/find/:id",async(req,res)=>{
    try{
      
      
        const product=await Product.findById(req.params.id)
        
        res.status(200).json(product)
    }
    catch(err){
    res.status(500).json(err)
    }
    
    })
    //Get all product
    router.get("/",async(req,res)=>{
        
        const qlast=req.query.new
        const qcat=req.query.cat
        
        try{
          let products

            if(qlast){
                products=await Product.find().sort({createdAt:-1}).limit(5)
            }
            else if(qcat){
                products=await Product.find({categories:{
                        $in:[qcat]
                    }
                })
            }
            else{
                products=await Product.find()
            }
            res.status(200).json(products)
        }
        catch(err){
        res.status(500).json(err)
        }
        
        })












module.exports=router