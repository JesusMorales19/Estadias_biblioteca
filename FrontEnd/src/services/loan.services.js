
import axios from 'axios';

const URL_API = "http://localhost:3000/api";

export const registerLoans = async (loan, token) => {
  return axios.post(`${URL_API}/register/loan`, loan, {
    headers: { Authorization: token }
  });
};

export const getLoans = async (token) => {
  return axios.get(`${URL_API}/getAll/loan`, {
    headers: { Authorization: token }
  });
};

export const returnLoan = async (id) => {
  return axios.post(`${URL_API}/return/loan/${id}`);
};
