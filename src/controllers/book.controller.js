import {Books, Categorys} from "../models/models.js";


export const registerBook = async (req, res) => {
    console.log(req.body);
    const {ISBN, title, author, publisher, yearPublication, copies, category, donation, description, status} = req.body;
    const existingCategory = await Categorys.findOne({Category: category});
    console.log("1", existingCategory);
    if(!existingCategory){
        console.log("La Categoria no existe.");
        return res.status(400).json({error:"La categoria no existe."});
    }
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

export const deleteBookF = async (req, res) => {
    try {
        const { code } = req.params;
        const existingBook = await Books.findOne({ ISBN: code });
        if(!existingBook || existingBook.status === "true") {
            return res.status(404).send("Book not found");
        }
        const deletedUser = await existingBook.deleteOne();
        res.send(deletedUser);
    } catch (error) {
        res.status(500).send("Book cannot be deleted")
    }
}

export const recoverBook = async (req, res) => {
    try {
        const { code } = req.params;
        const existingBook = await Books.findOne({ ISBN: code });
        if(!existingBook){
            return res.status(404).send("Book not found");
        }
        existingBook.status = true;
        const updatedBook = await existingBook.save();
        res.send(updatedBook);
    } catch (error) {
        res.status(500).send("Book cannot be recover")
    }
}