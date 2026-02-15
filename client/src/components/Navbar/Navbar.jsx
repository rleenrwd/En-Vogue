import PageBanner from "../PageBanner/PageBanner";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

export default function Navbar(){
    return (
        <>
            <PageBanner />

            <nav className="sticky-top navbar navbar-expand-lg" id="main-navbar">

                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} id="brand-logo" alt="En Vogue Grooming Logo" className="img-fluid"/>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Testimonials</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>

                        <div className="ms-auto">
                            <button className="main-navbar-button">Book Now</button>
                        </div>
                    </div>
                </div>
            </nav>
        
        
        
        </>
    )
}