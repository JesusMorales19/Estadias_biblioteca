import {User, Client} from "../models/models.js";
import { getToken, getTokenData } from "../config/jwt.config.js";

export const registerClient = async (req, res) => {
    console.log(req.body);
    const {username, firstName, lastName, address, phoneNumber, status, old} = req.body;
    try {
        const existingUser = await User.findOne({ username });

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
        const token = getToken({ username: username });
        res.send(saveClient);
        console.log("Hola");
        res.send(token);
    } catch (error) {
        res.status(500).json({error: error.message});
    };
};

export const deleteClient = async (req, res) => {
    try{
        const { code } = req.params;
        const existingClient = await Client.findOne({ username: code });

        if(!existingClient || existingClient.status === "false") {
            return res.status(404).send("Client not found");
        }

        existingClient.status = false;
        const updateClient = await existingClient.save();
        res.send(updateClient);
    } catch(error){
        res.status(500).send("Client cannot be deleted")
    }
}

export const deleteClientF = async (req, res) =>{
    try {
        const { code } = req.params;
        const existingClient = await Client.findOne({ username: code });
        if(!existingClient || existingClient.status === "true") {
            return res.status(404).send("Client not found");
        }
        const deletedUser = await existingClient.deleteOne();
        res.send(deletedUser);
    } catch (error) {
        res.status(500).send("Book cannot be deleted")
    }
}

export const recoverClient = async (req, res) => {
    try {
        const { code } = req.params;
        const existingClient = await Client.findOne({ username: code});
        if(!existingClient){
            return res.status(404).send("Client not found");
        }
        existingClient.status = true;
        const updatedClient = await existingClient.save();
        res.send(updatedClient);
    } catch (error) {
        res.status(500).send("Client cannot be recover");
    }
}

export const updateClient = async (req, res) => {
    const { code } =  req.params;
    const { address, phoneNumber, old } = req.body;
    try {
        const existingClient = await Client.findOne({ username: code });
        if(!existingClient){
            return res.status(404).send("Client not found");
        }
        existingClient.address = address;
        existingClient.phoneNumber = phoneNumber;
        existingClient.old = old;
        const updatedClient = await existingClient.save();
        res.send(updatedClient);
    } catch (error) {
        console.error(error);
        res.status(500).send("Client cannot be updated")
    }
}
export const verifyAccount = async (req, res) => {
    const {token} = req.params;
    try {
        //Verfica si no hay un token
        if(!token) {
            return res.status(401).json({ message: 'No Token, Authorization Denied' });
        }

        //Verficar Data 
        const data = await getTokenData(token) || nul;
        if(data === null){
            res.send("Error Gettin Data");
        }
        const { username } = data.data;

        //Checar el usuario
        const user = await User.findOne({ username });

        if(!user){
            return res.status(404).send("User Not Found");
        }

        const existingClient = await Client.findOne({ username });
        existingClient.verify = true;

        const updateClient = await existingClient.save();
        res.redirect('')

    } catch (error) {
        res.status(401).json({ message: 'Token Is Not Valid' });
    }
}

export const getClient = async (req, res) => {
    const { code } = req.params;
    try {
        const existingClient = await Client.findOne({ username: code });
        if(!existingClient || existingClient.status === false) {
            return res.status(404).send("Client not found");
        }
        res.send(existingClient);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error getting Clients info");
    }
}