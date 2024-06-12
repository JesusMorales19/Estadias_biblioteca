import {Books} from "../models/models.js";


export const registerBook = async (req, res) => {
    console.log(req.body);
    const {ISBN, title, author, publisher, yearPublication, copies, category, donation, description, status} = req.body;
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
            status,
        });
        const saveBook = await newBook.save();
        res.send(saveBook);
    } catch (error) {
        res.status(500).json({error: error.menssage});
    };
};

export const deleteBook = async (req, res) => {
    try {
        const { code } = req.params;
        const existingBook = await Books.findOne({ ISBN : code });
        if (!existingBook || existingBook.status === "false"){
            return res.status(404).send("Book not found");
        }
        existingBook.status = false;
        const updateBook = await existingBook.save();
        res.send(updateBook);
    } catch (error) {
        res.status(500).send("Book cannot be deleted")
    }
}