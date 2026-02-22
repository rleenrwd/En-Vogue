import {useMediaQuery} from 'react-responsive';
import {Link, useNavigate} from 'react-router-dom';
import PageBanner from "../PageBanner/PageBanner";
import logo from "../../assets/Logos/logo.png";
import "./Navbar.css";

export default function Navbar() {
    const isMobile = useMediaQuery({maxWidth: 767 });
    const navigate = useNavigate();

    return (
        <>
            <PageBanner />

                <nav className="navbar navbar-expand-md main-navbar sticky-top">
                    {/* MOBILE LAYOUT */}
                    {isMobile ? (
                        <>
                            <div className="container-fluid px-0 px-md-4">
                                <div className="container-fluid text-center">
                                    <div className="row pt-2 align-items-center">
                                        <div className="col-3">
                                            <Link to="/contact" className='nav-envelope'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                                </svg>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link className="navbar-brand d-block mx-auto m-0 p-0" to="/">
                                                <img 
                                                src={logo} 
                                                alt="En Vogue Grooming Logo"
                                                id="brand-logo"
                                                />
                                            </Link>
                                        </div>

                                        <div className="col-3">
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav me-auto">
                                        <Link className='nav-link nav-link-container d-flex justify-content-between align-items-center nav-first-child' to="/">
                                            <span>Home</span>
                                            <span className="material-symbols-outlined pe-3">
                                                chevron_right
                                            </span>
                                        </Link>

                                        <Link className='nav-link nav-link-container d-flex justify-content-between align-items-center ' to="/about">
                                            <span>About</span>
                                            <span className="material-symbols-outlined pe-3">
                                                chevron_right
                                            </span>
                                        </Link>

                                        <Link className='nav-link nav-link-container d-flex justify-content-between align-items-center' to="/services">
                                            <span>Services</span>
                                            <span className="material-symbols-outlined pe-3">
                                                chevron_right
                                            </span>
                                        </Link>

                                        <Link className='nav-link nav-link-container d-flex justify-content-between align-items-center' to="/testimonials">
                                            <span>Testimonials</span>
                                            <span className="material-symbols-outlined pe-3">
                                                chevron_right
                                            </span>
                                        </Link>

                                        <Link className='nav-link nav-link-container d-flex justify-content-between align-items-center nav-last-child' to="/contact">
                                            <span>Contact</span>
                                            <span className="material-symbols-outlined pe-3">
                                                chevron_right
                                            </span>
                                        </Link>
                                    </div>

                                    <div className="nav-btn-container">
                                        <button 
                                        className="nav-booknow-btn"
                                        type="button"
                                        onClick={() => navigate('/booking')}>
                                        Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="container px-0 px-md-4">
                                {/* TABLET & DESKTOP LAYOUT */}
                                <Link className="navbar-brand" to="/">
                                    <img 
                                    src={logo} 
                                    alt="En Vogue Grooming Logo"
                                    id="brand-logo"
                                    />
                                </Link>

                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav me-auto gap-3">
                                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                        <Link className="nav-link" to="/about">About </Link>
                                        <Link className="nav-link" to="/services">Services</Link>
                                        <Link className="nav-link" to="/testimonials">Testimonials</Link>
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </div>
                                    <div className="nav-btn-container">
                                        <button 
                                        className="nav-booknow-btn"
                                        type="button"
                                        onClick={() => navigate('/booking')}>
                                        Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </nav>
            </>

    )
}

