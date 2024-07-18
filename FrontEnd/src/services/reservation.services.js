import axios from "axios";

const URL_API = "http://localhost:3000/api";

export const registerReservation = async (reservation) => {
    return axios.post(`${URL_API}/register/reservation`, reservation);
}

export const deleteReservationFromApi = async (ISBN, username) => {
    return axios.delete(`${URL_API}/delete/reservation/${ISBN}/${username}`)
}

export const getUserCountReservation = async (username) => {
    return axios.get(`${URL_API}/reservation/count/${username}`)
}

export const getAllReservation = async () => {
    return axios.get(`${URL_API}/getAll/reservation`)
}

