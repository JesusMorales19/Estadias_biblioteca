import axios from "axios";

const URL_API = "http://localhost:3000/api";

export const getLoss = async (token) => {
    return axios.get(`${URL_API}/getAllBook/loss`, { headers: { Authorization: token }})
 };

 export const recoverLoss = async (id) => {
    return axios.post(`${URL_API}/recover/loss/${id}`);
 };

export const deleteLoss = async (id) => {
   return axios.delete(`${URL_API}/deleteBook/loss/${id}`)
}