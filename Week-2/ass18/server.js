//create HTTP server
import exp from 'express'

const app = exp()

//import APIs
import { userApp } from './APIs/userAPI.js'
import { productApp } from './APIs/productAPI.js'

//body parser middleware
app.use(exp.json())

//custom middleware
function middleware1(req,res,next){
    console.log("middleware1 executed")
    next()
}

function middleware2(req,res,next){
    console.log("middleware2 executed")
    next()
}

app.use(middleware1)
app.use(middleware2)

//connect APIs
app.use('/user-api',userApp)
app.use('/product-api',productApp)

//port
const port = 3000
app.listen(port,()=>console.log(`server listening port ${port}`))