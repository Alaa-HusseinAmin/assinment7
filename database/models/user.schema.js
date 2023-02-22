
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age:Number,
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
}, {
    timestamps: true
})


export const userModel = mongoose.model('user', userSchema)