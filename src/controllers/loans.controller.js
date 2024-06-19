import { Loans, Books, Client, lossBooks } from "../models/models.js";
import mongoose from "mongoose";

export const registerLoans = async (req, res) => {
    const { idLoan, ISBN, username, creatdAt, finalDate } = req.body;

    try {
        // Obtener el cliente relacionado con el username
        const client = await Client.findOne({ username });
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }

        // Verificar si el cliente está habilitado para prestar libros
        if (!client.status) {
            return res.status(400).json({ error: "Client is not allowed to borrow books" });
        }

        // Verificar cuántos préstamos activos tiene el cliente
        const activeLoansCount = await Loans.countDocuments({ username, finalDate: { $gte: new Date() } });
        if (activeLoansCount >= 3) {
            return res.status(400).json({ error: "Client has already borrowed the maximum number of books (3)" });
        }

        // Obtener el libro relacionado con el ISBN
        const book = await Books.findOne({ ISBN });
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        // Verificar la cantidad de ejemplares disponibles
        if (book.copies <= 0) {
            return res.status(400).json({ error: "No copies available for this book" });
        }

        // Crear el nuevo préstamo
        const newLoan = new Loans({
            idLoan,
            ISBN,
            username,
            title: book.title,
            author: book.author,
            firstName: client.firstName,
            lastName: client.lastName,
            address: client.address,
            creatdAt,
            finalDate,
        });

        // Guardar el préstamo en la base de datos
        const savedLoan = await newLoan.save();

        // Reducir la cantidad de ejemplares disponibles
        book.copies -= 1;

        // Si no quedan más ejemplares disponibles, cambiar el estado a no disponible
        if (book.copies === 0) {
            book.status = false;
        }

        // Guardar los cambios del libro
        await book.save();

        // Construir el objeto de respuesta combinando datos del préstamo, libro y cliente
        const response = {
            idLoan: savedLoan.idLoan,
            creatdAt: savedLoan.creatdAt,
            finalDate: savedLoan.finalDate,
            book: {
                title: book.title,
                author: book.author,
            },
            client: {
                firstName: client.firstName,
                lastName: client.lastName,
                address: client.address,
            },
        };

        // Enviar la respuesta al cliente
        res.status(200).json(response);

        // Verificar si la fecha final ha pasado
        const currentDate = new Date();
        if (currentDate > new Date(finalDate)) {
            // Mover los datos a la tabla de libros devueltos (ReturnedBooks)
            const lossBook = new lossBooks({
                idLoan: savedLoan.idLoan,
                ISBN: savedLoan.ISBN,
                username: savedLoan.username,
                title: book.title,
                author: book.author,
                firstName: client.firstName,
                lastName: client.lastName,
                address: client.address,
                returnDate: currentDate,
            });

            await lossBook.save();

            // Eliminar el préstamo de la tabla de préstamos (Loans)
            await Loans.findOneAndDelete({ idLoan });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const returnLoan = async (req, res) => {
    try {
        const { idLoan } = req.params;

        // Obtener el préstamo relacionado con el idLoan
        const loan = await Loans.findOne({ idLoan });
        if (!loan) {
            return res.status(404).send("Loan not found");
        }

        // Obtener el libro relacionado con el ISBN del préstamo
        const book = await Books.findOne({ ISBN: loan.ISBN });
        if (!book) {
            return res.status(404).send("Book not found");
        }

        // Verificar que la devolución es antes de la fecha final
        const currentDate = new Date();
        if (currentDate > new Date(loan.finalDate)) {
            return res.status(400).send("Return date is past the final date");
        }

        // Iniciar una sesión para la transacción
        const session = await mongoose.startSession();
        session.startTransaction();

        try {
            // Aumentar la cantidad de ejemplares disponibles
            book.copies += 1;

            // Si el libro estaba no disponible y ahora tiene ejemplares, cambiar su estado a disponible
            if (book.copies > 0) {
                book.status = true;
            }

            // Guardar los cambios del libro
            await book.save({ session });

            // Eliminar el préstamo de la tabla de préstamos (Loans)
            await Loans.findOneAndDelete({ idLoan }, { session });

            // Confirmar la transacción
            await session.commitTransaction();
            session.endSession();

            // Enviar la respuesta al cliente
            res.send({ message: "Book returned successfully", book });
        } catch (transactionError) {
            // Abortar la transacción en caso de error
            await session.abortTransaction();
            session.endSession();
            res.status(500).send("Book return failed");
        }
    } catch (error) {
        res.status(500).send("An error occurred while returning the book");
    }
};

