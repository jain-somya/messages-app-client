import axios from 'axios'
const instance = axios.create({
    baseURL: 'https://messages-app-2.herokuapp.com'
})

export default instance;