import cookieParser from "cookie-parser";
import { User } from "../models/models.js";
import bcryptjs from "bcryptjs";

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
