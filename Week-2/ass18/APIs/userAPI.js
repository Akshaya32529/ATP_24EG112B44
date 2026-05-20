import exp from 'express'

export const userApp = exp.Router()

//test data
let users=[]

//read all users
userApp.get('/users',(req,res)=>{
    res.json({message:"all users",payload:users})
})


//read user by id
userApp.get('/users/:id',(req,res)=>{
    let idOfUrl=Number(req.params.id)

    let user=users.find(userObj=>userObj.id===idOfUrl)

    if(user===undefined){
        return res.json({message:"User not found"})
    }

    res.json({message:"User found",payload:user})
})

//create user
userApp.post('/users',(req,res)=>{
    const newUser=req.body
    users.push(newUser)

    res.json({message:"user created"})
})

//update user
userApp.put('/users',(req,res)=>{
    let modifiedUser=req.body

    let index=users.findIndex(userObj=>userObj.id===modifiedUser.id)

    if(index===-1){
        return res.json({message:"User not found"})
    }

    users.splice(index,1,modifiedUser)

    res.json({message:"user modified"})
})

//delete user
userApp.delete('/users/:id',(req,res)=>{
    let idOfUrl=Number(req.params.id)

    let index=users.findIndex(userObj=>userObj.id===idOfUrl)

    if(index===-1){
        return res.json({message:"User not found"})
    }

    users.splice(index,1)

    res.json({message:"User removed"})
})