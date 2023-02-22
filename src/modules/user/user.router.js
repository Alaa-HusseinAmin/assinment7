import express from "express";
import { userAuth } from "../../middelware/auth.js";
import { validation } from "../../middelware/validation.js";

import * as usercontroller from './user.controller.js';
import { signInSchema, signUpSchema } from "./user.validation.js";
const userRouter = express.Router();

userRouter.post("/signup",validation(signUpSchema),usercontroller.signup);
userRouter.post("/signIn",validation(signInSchema),usercontroller.signIn);
userRouter.put("/",userAuth,usercontroller.Updateuser);
userRouter.delete("/",userAuth,usercontroller.Deleteuser);
userRouter.get("/getuser",userAuth,usercontroller.getuser);




export default userRouter;
