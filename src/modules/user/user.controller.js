import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { userModel } from "../../../database/models/user.schema.js";



export const signup = async (req, res) => {
    const { name, email, password,age } = req.body
    let user = await userModel.findOne({ email })
    if (user) {
        res.json({ message: "email already in use" })
    } else {
        bcrypt.hash(password, 8, async function (err, hash) {
            
            await userModel.insertMany({ name, email,age, password: hash })
            res.json({ message: 'success' })

        });
    }

}


export const signIn = async (req, res) => {
    const { _id ,email, password } = req.body
    let isFound = await userModel.findOne({ email })
    if (isFound) {
         const match = await bcrypt.compare(password, isFound.password);

        if (match) {
            let token=jwt.sign({name:isFound.name,userId:isFound._id,role:isFound.role},"alaa")
            res.json({ message: 'login', token })

        } else {
            res.json({ message: 'password incorrect' })
        }
        
    } else {
        res.json({ message: 'Account not found' })
    }
    }


//validation
export const Updateuser = async (req, res) => {
    const { _id ,email,name,age,password } = req.body
    let isFound = await userModel.findOne({ email })
    if (isFound) {
        let user = await userModel.findByIdAndUpdate(
            { _id },
            { name, password, age },
            { new: true }
          );
          res.json({ message: "success", user });  
    } else {
        res.json({ message: 'Account not found' })
    }
}
//validation
export const Deleteuser = async (req, res) => {
    const { _id ,email,} = req.body
    let isFound = await userModel.findOne({ email })
    if (isFound) {
    await userModel.findByIdAndDelete({ _id });
    res.json({ message: "success" }); 
    } else {
        res.json({ message: 'Account not found' })
    }
}

//validation
export const getuser = async (req, res) => {
    const { _id } = req.body
        let users = await userModel.findById({_id});
        res.json({ message: "success", users });
}


