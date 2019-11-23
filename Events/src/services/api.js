import axios from 'axios';

const base = 'https://backevents.onrender.com/api';

const api = axios.create({
    baseURL: base
});
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default api;