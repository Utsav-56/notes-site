// src/services/axiosInstance.js
import axios from 'axios';

const myAxios = axios.create({
    baseURL: 'https://localhost:3669/api', // Replace with your API base URL
    withCredentials: true, // Include cookies in requests
});

export default myAxios;
