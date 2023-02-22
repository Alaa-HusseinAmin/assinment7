import Joi from "joi";

export const addBlogSchema=Joi.object({
    content:Joi.string().min(3).max(80).required(),
    // addedBy:Joi.string().hex().length(24), we get it from token
})



