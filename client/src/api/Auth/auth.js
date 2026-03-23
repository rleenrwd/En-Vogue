import axios from "../Axios/axios";

export async function login(data) {
    try {
        const response = await axios.post("/auth/login", data);
        return response.data;
    } catch (err) {
        console.error("Login error:", err);
        const message = err.response?.data?.message || "Failed to log in.";
        throw new Error(message);
    }
}

export async function getMe() {
    try {
        const response = await axios.get("/auth/me");
        return response.data;
    } catch (err) {
        const message = err.response?.data?.message || "Unauthorized.";
        throw new Error(message)
    }
}