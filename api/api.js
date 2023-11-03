import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.actibhealth.com'
});

export default api;
