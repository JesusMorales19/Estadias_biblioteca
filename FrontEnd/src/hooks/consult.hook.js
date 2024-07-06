import { registerConsult } from "../services/consult.services";

export const useRegisterConsult = async (consult) => {
    try {
        const res = await registerConsult(consult)
        return res.data; 
    } catch (error) {
        console.error(error);
        throw error;
    }

}