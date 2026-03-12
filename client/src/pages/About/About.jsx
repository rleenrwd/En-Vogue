import {Link} from "react-router-dom";
import "./About.css";
import hero from "./Images/about_page_image.jpg";
import logo from "../../assets/Logos/logo.png";

export default function About() {
    return  (
        <>
            <section className="about-hero-section mt-3">
                <div className="about-hero">
                    <img src={hero} alt="Dog posing in studio" className="img-fluid about-hero-image"/>
                    
                    <div className="about-hero-text">
                        <h1 className="about-hero-title">About Us</h1>
                        <p className="about-hero-subtext">The story behind the SF-based luxury grooming shop - En Vogue.</p>
                    </div>
                </div>

                <div className="about-logo-divider mb-3">
                    <img src={logo} alt="En Vogue brand logo" className="about-logo-divider-image" />
                </div>
                </section>


                <section className="about-main-content mt-4">
                    <p className="about-main-content-paragraph">What began as a deep love for animals and a dream of working independently has grown into En Vogue — a space where thoughtful care and refined pet grooming come together. Built on the belief that pets deserve the same comfort, patience, and attention we give the people we love, En Vogue was created to offer a more personal and elevated grooming experience for both pets and their families.</p>
                    <p className="about-main-content-paragraph">From the moment a pet arrives, our focus is simple: create an environment where they feel safe, calm, and genuinely cared for. Every visit is approached with patience and attention to detail, because great grooming isn’t just about appearance — it’s about trust, comfort, and making sure every pet feels relaxed throughout their experience.</p>
                    <blockquote class="about-quote">
                        "Our focus is simple: create an environment where they feel safe, calm, and genuinely cared for"
                    </blockquote>
                    <p className="about-main-content-paragraph">Over time, that commitment to care has helped En Vogue earn the trust of countless pet parents throughout San Francisco. Many of our clients come to us through word of mouth and glowing reviews, and we’re proud to have built a reputation for treating every pet with the kindness and respect they deserve.</p>
                    <p className="about-main-content-paragraph">Whether it’s your pet’s first visit or they’ve been part of the En Vogue family for years, our goal remains the same: to provide an experience that leaves both pets and their owners happy, confident, and excited to return. We invite you to come see why so many pet parents trust En Vogue to care for their cherished companions.</p>
                    <p className="about-main-content-paragraph signature">Thank you for your support!<br/><span className="about-span">- En Vogue </span></p>

                    <div className="about-btn-container">
                        <Link className="about-btn" to="/services">View Services</Link>
                    </div>
                </section>
                
        </ >
    

    )
}