// loanController.js

import { Loans, Books, Client, lossBooks } from "../models/models.js";
import mongoose from "mongoose";

// Función para registrar un nuevo préstamo
export const registerLoans = async (req, res) => {
    const { idLoan, ISBN, username, creatdAt, finalDate } = req.body;

    try {
        const client = await Client.findOne({ username });
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }

        if (!client.status) {
            return res.status(400).json({ error: "Client is not allowed to borrow books" });
        }

        const activeLoansCount = await Loans.countDocuments({ username, finalDate: { $gte: new Date() } });
        if (activeLoansCount >= 3) {
            return res.status(400).json({ error: "Client has already borrowed the maximum number of books (3)" });
        }

        const book = await Books.findOne({ ISBN });
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }

        if (book.copies <= 0) {
            return res.status(400).json({ error: "No copies available for this book" });
        }

        const newLoan = new Loans({
            idLoan,
            ISBN,
            username,
            title: book.title,
            author: book.author,
            firstName: client.firstName,
            lastName: client.lastName,
            address: client.address,
            phoneNumber: client.phoneNumber,
            creatdAt,
            finalDate,
        });

        const savedLoan = await newLoan.save();
        book.copies -= 1;

        if (book.copies === 0) {
            book.status = false;
        }

        await book.save();

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
                phoneNumber: client.phoneNumber
            },
        };

        return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Función para mover préstamos vencidos a la tabla de libros perdidos
export const updateOverdueLoans = async () => {
    try {
        const currentDate = new Date();
        const overdueLoans = await Loans.find({ finalDate: { $lt: currentDate } });

        for (const loan of overdueLoans) {
            const book = await Books.findOne({ ISBN: loan.ISBN });
            const client = await Client.findOne({ username: loan.username });

            if (book && client) {
                const lossBook = new lossBooks({
                    idLoan: loan.idLoan,
                    ISBN: loan.ISBN,
                    username: loan.username,
                    title: loan.title,
                    author: loan.author,
                    firstName: client.firstName,
                    lastName: client.lastName,
                    address: client.address,
                    phoneNumber: client.phoneNumber,
                    returnDate: currentDate,
                });

                await lossBook.save();

                // Actualizar el estado del cliente
                client.status = false;
                await client.save();

                // Eliminar el préstamo de la tabla de préstamos (Loans)
                await Loans.findOneAndDelete({ idLoan: loan.idLoan });
            }
        }

        console.log("Updated overdue loans successfully");
    } catch (error) {
        console.error("Error updating overdue loans:", error);
    }
};

// Configurar la ejecución periódica de updateOverdueLoans
setInterval(updateOverdueLoans, 86400000); 

// Función para devolver un libro prestado
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
            return res.send({ message: "Book returned successfully", book });
        } catch (transactionError) {
            // Abortar la transacción en caso de error
            await session.abortTransaction();
            session.endSession();
            return res.status(500).send("Book return failed");
        }
    } catch (error) {
        return res.status(500).send("An error occurred while returning the book");
    }
};

// Función para obtener todos los préstamos
export const getAllLoans = async (req, res) => {
    try {
      const loans = await Loans.find();
      return res.send(loans);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Error al obtener Loans");
    }
};
