// src/services/axiosInstance.js
import axios from "axios";

import router from "@/router/index.js";



const myAxios = axios.create();


myAxios.defaults.timeout = 2500;
myAxios.defaults.baseURL = "http://localhost:3669/api/";
myAxios.defaults.headers.post['Content-Type'] = 'application/json';

myAxios.defaults.method = "POST";
myAxios.defaults.withCredentials = true;

myAxios.interceptors.response.use(function (response) {

    console.log("response: \n", response);
    return response;
}, function (error) {

    console.log("error: \n", error);

    //following error code recieved from server
    if (error.response) {
        if (error.response.status === 401) {
            router.push({ name: 'login' });
        }
    }




    return Promise.reject(error);
});




export default myAxios;
