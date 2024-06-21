import { Books, Client, lossBooks } from "../models/models.js";

export const recoverLostBook = async (req, res) => {
    const { idLoan } = req.params;

    try {
        // Buscar el registro del libro perdido
        const lostBook = await lossBooks.findOne({ idLoan });

        if (!lostBook) {
            return res.status(404).json({ error: "Lost book record not found" });
        }

        // Obtener el libro relacionado con el ISBN
        const book = await Books.findOne({ ISBN: lostBook.ISBN });

        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        // Obtener el cliente relacionado con el username
        const client = await Client.findOne({ username: lostBook.username });

        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }

        // Actualizar el estado del cliente a autorizado para tomar prestados más libros
        client.status = true;
        await client.save();

        // Añadir un ejemplar al libro recuperado
        book.copies += 1;
        book.status = true; // Cambiar el estado del libro a disponible
        await book.save();

        // Eliminar el registro de libro perdido
        await lossBooks.findOneAndDelete({ idLoan });

        // Respuesta exitosa
        res.status(200).json({ message: "Book recovered successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllLoss = async (req, res) => {
  try {
    const loss = await lossBooks.find();
    console.log(loss);
    res.send(loss);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener Books Loss");
  }
};