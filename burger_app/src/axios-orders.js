import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-94349-default-rtdb.firebaseio.com/'
});

export default instance;