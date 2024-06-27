import axios from "axios";

const URL_API = "http://localhost:3000/api";

export const registerBooks = async (book, token) => {
    return axios.post(`${URL_API}/register/book`, book, { headers: { Authorization: token }
    });
}

