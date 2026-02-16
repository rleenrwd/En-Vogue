import {useMediaQuery} from 'react-responsive';
import PageBanner from "../PageBanner/PageBanner";
import logo from "../../assets/Logos/logo.png";
import "./Navbar.css";

export default function Navbar() {
    const isMobile = useMediaQuery({maxWidth: 767 });

    return (
        <>
            <PageBanner />

            <div className="container-fluid px-0">
                <nav className="navbar navbar-expand-md main-navbar sticky-top">
                    <div className="container-fluid px-0">

                    {/* MOBILE LAYOUT */}
                    {isMobile ? (
                        <div className="container-fluid text-center">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                    </svg>
                                </div>
                                <div className="col-6">
                                    <a className="navbar-brand" href="#">
                                        <img 
                                        src={logo} 
                                        alt="En Vogue Grooming Logo"
                                        id="brand-logo"
                                        />
                                    </a>
                                </div>

                                <div className="col-3">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                </div>
                            </div>
                         </div>
                    ) : (
                        <>
                            {/* TABLET & DESKTOP LAYOUT */}
                            <a className="navbar-brand" href="#">
                                <img 
                                src={logo} 
                                alt="En Vogue Grooming Logo"
                                id="brand-logo"
                                />
                            </a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </>
                    )}

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav me-auto">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">About</a>
                            <a className="nav-link" href="#">Services</a>
                            <a className="nav-link" href="#">Testimonials</a>
                            <a className="nav-link" href="#">Contact</a>
                        </div>
                        <div className="nav-btn-container">
                            <button className="nav-booknow-btn">Book Now</button>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>

    )
}