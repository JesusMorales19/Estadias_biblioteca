import axios from "axios";

const URL_API = "http://localhost:3000/api";

export function registerClient(client){
    return axios.post(`${URL_API}/register/client`, client);
}

export function getClient(client) {
    return axios.get(`${URL_API}/get/client/${client}`)
}

export function verifyToken(token) {
    return axios.get(`${URL_API}/verify-token`, {headers: {Authorization: token}})
}

export function verifyUsername(username){
    return axios.get(`${URL_API}/verify-username/${username}`)
}

export function deleteClient(client, token) {
    console.log(token);
    return axios.put(`${URL_API}/delete/client/${client}`, {headers: {Authorization: token}})
}

export function deleteFClient(client, token) {
    return axios.delete(`${URL_API}/deleteF/client/${client}`, { headers: { Authorization: token}})
}


export function recoverClient(client, token) {
    return axios.put(`${URL_API}/recover/client/${client}`, { headers: { Authorization: token}})
}

export function getAllClient(){
    return axios.get(`${URL_API}/getAll/client`);
}