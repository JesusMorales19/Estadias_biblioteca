import { Consults } from "../models/models.js";

export const registerConsult = async (req, res) => {
    console.log(req.body);
    const {name, lastName, gender, age, ISBN, title, author} = req.body;
    try {
        const newConsult = new Consults({
            name,
            lastName,
            gender, 
            age,
            ISBN,
            title,
            author,
        });
        const saveConsult = await newConsult.save();
        res.send(saveConsult);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

