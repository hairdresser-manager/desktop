import axios from 'axios';


export default function setup() {
    axios.interceptors.request.use(function(config) {
        
        const token = JSON.parse(localStorage.getItem('user'));
        if(token) {
            config.headers.Authorization = `Bearer ${token.accessToken}`;
        }
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}