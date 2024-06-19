import { Opinions } from "../models/models.js";

export const registerOpinion = async (req, res) => {
    console.log(req.body);
    const { email, name, message } = req.body;
    try {
        const newOpinion = new Opinions({
            email,
            name,
            message,
        });
        const saveOpinion = await newOpinion.save();
        res.send(saveOpinion);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}