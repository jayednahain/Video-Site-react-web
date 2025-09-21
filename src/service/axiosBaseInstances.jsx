import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000',
    timeout: 10000,
    headers: {
        'x-custom-header': 'foobar',
    },

})

export default axiosInstance