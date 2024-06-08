import {User, Client} from "../models/models.js";
import { getToken, getTokenData } from "../config/jwt.config.js";

export const registerClient = async (req, res) => {
    console.log(req.body);
    const {username, firstName, lastName, address, phoneNumber, status, old} = req.body;
    try {
        const existingUser = await User.findOne({username});

        if (!existingUser) {
            return res.status(404).send("User not found");
        }
        const newClient = new Client({
            username, 
            firstName,
            lastName,
            address, 
            phoneNumber, 
            status,
            old
        });

        const saveClient = await newClient.save(); 
        const token = getToken({ username: username});
        res.send(saveClient);
        res.send(token);
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};