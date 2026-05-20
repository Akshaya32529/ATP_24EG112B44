import exp from 'express'

export const productApp = exp.Router()

let products=[]


//read all products
productApp.get('/products',(req,res)=>{
    res.json({message:"all products",payload:products})
})

//create product
productApp.post('/products',(req,res)=>{
    const newProduct=req.body
    products.push(newProduct)

    res.json({message:"product created"})
})

//read product by brand
productApp.get('/products/:brand',(req,res)=>{
    let brandOfUrl=req.params.brand

    let product=products.filter(p=>p.brand===brandOfUrl)

    res.json({message:"products by brand",payload:product})
})

//update product
productApp.put('/products',(req,res)=>{
    let modifiedProduct=req.body

    let index=products.findIndex(p=>p.productId===modifiedProduct.productId)

    if(index===-1){
        return res.json({message:"Product not found"})
    }

    products.splice(index,1,modifiedProduct)

    res.json({message:"product modified"})
})

//delete product
productApp.delete('/products/:id',(req,res)=>{
    let idOfUrl=Number(req.params.id)

    let index=products.findIndex(p=>p.productId===idOfUrl)

    if(index===-1){
        return res.json({message:"Product not found"})
    }

    products.splice(index,1)

    res.json({message:"product removed"})
})