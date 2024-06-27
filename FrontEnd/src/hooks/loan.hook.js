import { registerLoans, getLoans, returnLoan } from '../services/loan.services.js';

export const useRegisterLoan = async (loan) => {
  try {
    const token = localStorage.getItem("token");
    const res = await registerLoans(loan, token);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useGetLoans = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await getLoans(token);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const useReturnLoan = async (id) => {
  try {
    const res = await returnLoan(id); // Llama a la función de servicio para devolver el préstamo
    return res.data; // Devuelve los datos recibidos en la respuesta

  } catch (error) {
    console.error("Error returning loan:", error);
    throw error; // Lanza el error para manejarlo en componentes superiores
  }
};
