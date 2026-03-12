import exp from 'express'
import {connect} from 'mongoose'
import {productApp} from './APIs/productAPIs'
const app=exp()

//forward req to UserApp if path starts with /user-api
app.use(exp.json());
app.use("/product-api",productApp)

//connect to db server
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/products");
        console.log("DB connection success")
        //start server
        app.listen(2000,()=>console.log("server on port 2000.."))
    }catch(err){
        console.log("err in DB connection:",err)
    }
}

connectDB();

//error handling middleware
app.use((err,req,res,next)=>{
    console.log(err.name)
    if(err.name==="ValidationError"){
        return res.status(400).json({message:"error occurred",error:"ValidationError"})
    }
//casrError
if(err.name==="CastError"){
    return res.status(400).json({message:"error occurred",error:"CastError"
    })
}
//send serverside error
return res.status(500).json({message:"error occurred",error:"serverSideError"})
});


