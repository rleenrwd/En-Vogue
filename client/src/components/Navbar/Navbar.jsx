import {useMediaQuery} from 'react-responsive';
import PageBanner from "../PageBanner/PageBanner";
import logo from "../../assets/images/logo_desktop.png";
import mobileLogo from "../../assets/images/logo_mobile.png";
import "./Navbar.css";

export default function Navbar(){
    const isDesktop = useMediaQuery({minWidth: 992});
    return (
        <>
            <PageBanner />

            <nav className="sticky-top navbar navbar-expand-lg" id="main-navbar">

                <div className="container-fluid">
                    {!isDesktop && 
                    <a href="#" id="envelope-sm">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="40" 
                        height="40" 
                        fill="currentColor" 
                        class="bi bi-envelope" 
                        viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                        </svg>
                    </a>
                    }

                    <a className="navbar-brand" href="#">
                        <img 
                        src={isDesktop ? logo : mobileLogo} 
                        id="brand-logo" 
                        alt="En Vogue Grooming Logo" 
                        className="img-fluid"/>
                    </a>

                    <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
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
                            <button id="main-navbar-button">Book Now</button>
                        </div>
                    </div>
                </div>
            </nav>
        
        </>
    )
}