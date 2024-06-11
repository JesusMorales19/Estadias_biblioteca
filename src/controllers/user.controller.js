
import { User } from "../models/models.js";
import bcryptjs from "bcryptjs";
import {getToken, getTokenData} from "../config/jwt.config.js"
import cookie from "cookie-parser"



export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if(!user){
            return res.status(401).json({error:"Invalid data"})
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(404).json({ error:"Invalid data" });
        }
        const token = getToken({ username });
        res.cookie("Authorization", token).json({ token, username });
        console.log("Inicio de sesion correctamente")
        res.status(200);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const registerUser = async (req, res) => {
    console.log(req.body);
    const {username, password, role} = req.body;
    try {
        const passwordHash = await bcryptjs.hash(password, 10);
        const newUser = new User({
            username,
            password: passwordHash,
            role,
        });

        const saveUser = await newUser.save();
        res.send(saveUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
 } 

 export const deleteUser = async (req, res) => {
    try{
    const {code} = req.params;
    const existingUser = await User.findOne({username:code});
    if(!existingUser){
        return res.status(404).send("User not found");
    }

    existingUser.status = false;
    const updateUser = await existingUser.save();
    res.send(updateUser);
} catch (error) {
    res.status(500).send("User cannot be deleted")
}
 }
