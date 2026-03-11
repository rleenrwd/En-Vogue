import api from "../Axios/axios";

export async function getServices() {
    const res = await api.get("/services");
    return res.data?.data ?? [];
}