import axios from "../Axios/axios";

export async function submitContactForm(formData) {
    try {
        const res = await axios.post("/messages", formData);
        return res.data;
    } catch (error) {
        const message = error.response?.data?.message || "Failed to send message.";
        throw new Error(message);
    }
}