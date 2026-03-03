import "./ServiceCard.css";

export default function ServiceCard({ service, index }) {

    const isEven = index % 2 === 0;

    return (
        <div className="card mb-3 main-card-container">
            <div className="row g-0">
       
             
                <div className="col-md-6 order-md-0">
                    <img src={service.image} className="img-fluid service-card-image" alt="..."/>
                </div>

                <div className="col-md-6 order-md-1">
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
