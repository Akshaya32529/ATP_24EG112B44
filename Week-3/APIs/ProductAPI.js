import exp from 'express'
import {productModel} from '../models/productModel.js'
import {hash} from 'bcryptjs'
export const productApp=exp.Router()

productApp.post("/products",async(req,res)=>{
     const newproduct=req.body;
     const newproductDocument=new productModel(newproduct)
             //save
             const result=await newproductDocument.save();
             console.log("result:",result)
     
             //send response
             res.status(201).json({message:"product created"});
          
          });

 productApp.get("/products", async (req, res) => {
    const productList = await productModel.find();
    res.status(200).json({ message: "products", payload: productList });
 });        
 
  productApp.get("/products/:id", async (req, res) => {
    try{
       // read object id from req params
       const pid = req.params.id;
 
       // find user by id
       const productObj = await productModel.findById(pid);
         //if user not found
         if(!productObj){
          res.status(404).json({message:"product not found"})
         }
 
       // send response
       res.status(200).json({
          message: "product found",
          payload: productObj
       });
    }catch(err){
       res.status(500).json({
          message: "error reading product",
          error: err.message
       });
    }
 });

 productApp.put("/products/:id", async (req, res) => {
    const modifiedproduct = req.body;
    const pid = req.params.id;
 
    const updatedproduct = await productModel.findByIdAndUpdate(
       pid,
       { $set: { ...modifiedproduct } },
       { new: true ,runValidators: true}
    );
 
    res.status(200).json({ message: "product modified", payload: updatedproduct });
 });


 productApp.delete("/products/:id", async (req, res) => {
    const id = req.params.id;
    let deletedProduct=await productModel.findByIdAndDelete(id);
    if(!deletedProduct){
       return res.status(404).json({message:"user not found"})
    }
    res.json({ message: "Product deleted",payload:deletedProduct });
 });
 