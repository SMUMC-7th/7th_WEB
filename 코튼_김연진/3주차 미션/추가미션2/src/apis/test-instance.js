import axios from 'axios';

const testInstance = axios.create({
    baseURL: 'https://koreanjson.com',
})

testInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
        config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error),
)

export {testInstance}