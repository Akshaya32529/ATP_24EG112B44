import {Schema,Types,model} from 'mongoose'
const adminSchema=new Schema({
    admin:{
        type:Types.ObjectId,
    }
})