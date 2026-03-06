import {Link} from "react-router-dom";

import "./ServiceCard.css";

export default function ServiceCard({ service, index }) {

    const isEven = index % 2 === 0;
    const hours = Math.floor(service.durationMins / 60);
    const minutes = service.durationMins % 60;

    return (
        <div className="card mb-3 main-card-container">
            <div className="row g-0">
       
                <div 
                className={
                    `col-12 col-md-6 
                    ${isEven ? "order-0 order-md-0" : "order-md-1"}
                    `}>
                    <img src={service.image} className="img-fluid service-card-image object-fit-cover" alt="Grooming photos"/>
                </div>

                <div 
                className={
                    `col-12 col-md-6 right-side-of-card
                    ${isEven ? "order-1 order-md-1" : "order-1 order-md-0"}
                    `}>

                    <div className="card-body">
                        <h5 className="card-title service-card-title">{service.name}</h5>
                        <p className="card-text service-card-subtitle">{service.subtitle}</p>
                        <hr />
                        <p className="card-text service-card-subtitle price-line">
                            Approx. {hours} 
                            {minutes > 0 && ` hr ${minutes} mins`}
                            {minutes === 0 && " hrs"} | 
                            Starting at ${service.price}
                        </p>

                        <Link to={`/services/${service._id}`} className="service-card-link">Read More</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
