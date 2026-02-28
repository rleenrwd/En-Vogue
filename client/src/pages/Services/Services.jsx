import {useEffect, useState} from "react";
import { getServices } from "../../api/services";
import ServiceCard from "../../components/Services/ServiceCard";
import heroImage from "./images/dog_bath.jpg";
import "./Services.css";

export default function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadServices = async () => {
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


    return (
        <>
            {/* HERO BANNER */}
            <section className="service-page-hero-banner container-fluid px-0 mb-4">
                <img
                className="img-fluid w-100"
                id="hero-image" 
                src={heroImage} 
                alt="Dog getting a bath" />
            </section>

            {/* INTRO */}
            <section className="services-page-intro mb-5">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-md-4 services-h1-col-container">
                            <h1 className="display-3 service-intro-h1-M2L">Our <br />Signature<br />Services</h1>
                            <h1 className="display-4 service-intro-h1-SM">Our Signature Services</h1>
                        </div>

                       {/* DESKTOP VERTICAL DIVIDER */}
                        <div className="col-md-1 d-flex justify-content-center align-items-center">
                          <hr className="services-intro-hr-M2L"/>  
                        </div>
                        
                        
 
                        <div className="col-12 col-md-7 services-intro-p-container">
                            <p className="services-intro-p">At En Vogue Pet Grooming in San Francisco, we offer an exclusive collection of 
                            signature pet services crafted for the most discerning pet parents. From couture-level grooming and indulgent spa baths to our boutique doggy day care, 
                            refined overnight boarding, and elegant dog walking experiences — every offering is delivered with intention, precision, and poise. 
                            This is care reimagined — where wellness meets sophistication, and every visit feels like a five-star retreat for your cherished companion.
                            </p>
                        </div>


                    </div>
                </div>
            </section>


            {loading && <p>Loading Services...</p>}
            {error && <p>{error}</p>}

            {!loading && !error && (
                <ul className="services-list">
                    {services.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </ul>
            )}
        </>
    )



}
{/* <br /><span className="services-h1-sm-span">Services</span> */}