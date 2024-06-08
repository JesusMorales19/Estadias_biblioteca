import {Books} from "../models/models.js";


export const registerBook = async (req, res) => {
    console.log(req.body);
    const {ISBN, title, author, publisher, yearPublication, copies, category, donation, description} = req.body;
    try {
        const newBook = new Books({
            ISBN,
            title,
            author,
            publisher,
            yearPublication,
            copies,
            category,
            donation,
            description,
        });
        const saveBook = await newBook.save();
        res.send(saveBook);
    } catch (error) {
        res.status(500).json({error: error.menssage});
    };
};