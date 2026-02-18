import {useEffect, useState} from "react";
import { getServices } from "../../api/services";
import ServiceCard from "../../components/Services/ServiceCard";

export default function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadServices() {
            try {
                const data = await getServices();
                setServices(data);
            } catch (err) {
                const message = err?.response?.data?.message ?? "Failed to load services";
                setError(message);
            } finally {
                setLoading(false);
            }
        }

        loadServices();
    }, []);

    if (loading) return <p>Loading services...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <h2>Our Signature Services</h2>
            {services.length === 0 ? (
                <p>No services found.</p>
            ) : (
                <ul>
                    {services.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </ul>
            )}
        
        </>
    )



}