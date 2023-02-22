  import { blogModel } from "../../../database/models/blog.schema.js";



export const addBlog = async (req, res) => {
    const { content } = req.body
    await blogModel.insertMany({content,addedBy:req.userId})
    res.json({ message: 'Blog Added'})
}

//validation
export const UpdateBlog = async (req, res) => {
    const { _id ,content } = req.body
    let isFound = await blogModel.findOne({ _id })
    if (isFound) {
        let blog = await blogModel.findByIdAndUpdate(
            {_id},
            { content,addedBy:req.userId },
            { new: true }
          );
          res.json({ message: "success", blog });  
    } else {
        res.json({ message: 'Blog not found' })
    }
}


//validation
export const DeleteBlog = async (req, res) => {
    const { _id } = req.body
    let isFound = await blogModel.findOne({ _id })
    if (isFound) {
    await blogModel.findByIdAndDelete({ _id,addedBy:req.userId });
    res.json({ message: "success" }); 
    } else {
        res.json({ message: 'Blog not found' })
    }
}


//validation it only find not take anything from postman
export const getAllBlogs = async (req, res) => {
let blogs = await blogModel.find({}).populate('addedBy')
res.json({ message: "success", blogs })
}

//validation
export const getBlogById = async (req, res) => {
    const {_id}=req.body
    let blogs = await blogModel.findById({_id}).populate('addedBy')
    res.json({ message: "success", blogs })
}
