import axios from "axios";

const URL_API = "http://localhost:3000/api";

export const registerOpinion = async (opinion) => {
    return axios.post(`${URL_API}/register/opinion`, opinion);
};

export const getOpinion = async () => {
    return axios.get(`${URL_API}/getAll/opinion`)
}