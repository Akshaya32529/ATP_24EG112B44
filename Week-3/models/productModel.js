import mongoose from 'mongoose'
import {Schema} from 'mongoose'

const productSchema = new Schema({
    productId:{
        type:Number,
        required:[true,"productId is required"]
    },
    productName:{
        type:String,
        required:[true,"productName must be required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10000,"Minimum price is 10000"],
        max:[50000,"Maximum price is 50000"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    }
})

export const productModel = mongoose.model("product",productSchema)