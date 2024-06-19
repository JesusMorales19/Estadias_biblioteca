import {Categorys} from "../models/models.js";

export const registerCategory = async (req, res) => {
console.log(req.body);
const { Category, nameCategory } = req.body;
try {
    const newCategory = new Categorys({
        Category,
        nameCategory,
    });
    const saveCategory = await newCategory.save();
    res.send(saveCategory);
} catch (error) {
    res.status(500).json({error: error.message});
}
}

