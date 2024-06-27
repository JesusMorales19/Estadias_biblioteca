import { registerBooks } from "../services/book.services.js";

export const useRegisterBook = async (book) => {
    try {
        const token = localStorage.getItem("token");
        const res = await registerBooks(book, token);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
