import { getOpinion, registerOpinion } from "../services/opinion.services";

export const useRegisterOpinion = async (opinion) => {
    try {
        const res = await registerOpinion(opinion)
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const useGetOpinion = async () => {
    try {
        const res = await getOpinion();
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}