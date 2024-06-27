// eslint-disable-next-line no-unused-vars
import { clientService, userService } from "../services/services.js";

export const getClient = async () => {
    try {
        const username = localStorage.getItem("username");
        const token = localStorage.getItem("token");
        const res = await clientService.getClient(username, token);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const useVerifyToken = async () => {
    try {
        const res = await clientService.verifyToken(localStorage.getItem("token"));
        return res;
    } catch (error) {
        if(error.response && error.response.status === 401) {
            console.log(error);
            console.log(localStorage.getItem("token"));
            throw new Error("Token expired or Invalid");
        }else {
            console.log(error);
            console.log('Hola');
            throw new Error("Something went wrong");
        }
    }
};

export const useVerifyUsername = async () => {
    try {
        const res = await clientService.verifyUsername(localStorage.getItem("username"));
        return res;
    } catch (error) {
        if(error.response && error.response.status === 401){
            console.log(error);
            console.log(localStorage.getItem("token"));
            throw new Error("Token expired or Invalid");
        }else {
            console.log(error);
            throw new Error("Something went wrong");
        }
    }
}