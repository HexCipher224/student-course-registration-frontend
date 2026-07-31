import axios from "axios";

const api = axios.create({
    baseURL: "https://student-course-registration-backend-2mbs.onrender.com/api",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;