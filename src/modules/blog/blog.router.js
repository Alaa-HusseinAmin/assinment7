import express from 'express';
import { userAuth } from "../../middelware/auth.js";
import { validation } from '../../middelware/validation.js';
import { addBlogSchema } from "./blog.validation.js";

import * as blogController from './blog.controller.js';
const blogRouter = express.Router()

blogRouter.post('/',validation(addBlogSchema),userAuth,blogController.addBlog)
blogRouter.get('/',userAuth,blogController.getAllBlogs)
blogRouter.get('/getBlog',userAuth,blogController.getBlogById)
blogRouter.put('/',userAuth,blogController.UpdateBlog)
blogRouter.delete('/',userAuth, blogController.DeleteBlog)
export default blogRouter