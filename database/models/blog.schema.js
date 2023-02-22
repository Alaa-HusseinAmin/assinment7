import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    content: String,
    addedBy: {
        type: mongoose.Types.ObjectId,
        ref:'user'
    }
}, {
    timestamps: true
})


export const blogModel = mongoose.model('blog', blogSchema)