import axios from "axios";

export default function handleToken() {
    return axios.interceptors.request.use(config => {
        const token = localStorage.getItem("jwt");
        config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    });
}


