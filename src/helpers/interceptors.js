import axios from 'axios';

export default function setup() {
    axios.interceptors.request.use(function(config) {
        const user = JSON.parse(localStorage.getItem('user'));
        if(user) {
            config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    }, function(err) {
        return Promise.reject(err);
    });
}