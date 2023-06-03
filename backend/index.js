const express =require("express");
const app=express();
const userRoute=require("./routes/user");
const dotenv=require("dotenv");
const mongoose=require("mongoose")
const authRoute=require("./routes/auth")
const productRoute=require("./routes/product")
const cartRoute=require("./routes/cart")
const cors =require("cors")
app.use(cors())
app.use(express.json())


dotenv.config();


mongoose.connect(process.env.db_key).
then(()=>console.log("succes")).catch(()=>console.log("error"))

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/product",productRoute)
app.use("/api/cart",cartRoute)






app.listen(process.env.port_no,()=>{
    console.log("ok")   
})