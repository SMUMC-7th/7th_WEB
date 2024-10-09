import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`,
    },
    baseURL: import.meta.env.VITE_SPOTIFY_API_URL,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken')
        if (token) {
        config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error),
)

export {axiosInstance}