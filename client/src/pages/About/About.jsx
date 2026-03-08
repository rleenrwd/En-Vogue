import {Link} from 'react-router-dom';
import "./About.css";

export default function About() {
    return  (
        <section className="about-main-section">
            <h1 className="display-3 about-header">Our Story</h1>
            <hr className='about-hr' />
            <p className="about-paragraph">What began as a deep love for animals and a dream of working independently has grown into En Vogue — a space where luxury meets compassion. Founded with the vision of bringing joy not only to pets, but to the people who cherish them, En Vogue is a reflection of its owner's devotion to care, creativity, and quality.<br /><br />We believe that every pet, regardless of breed or background, deserves to be treated with unmatched kindness, dignity, and excellence. This isn't just dog grooming — it's a celebration of the bond between pets and their people, delivered with elegance and heart.</p>
            <p className='about-signature'>Thank you for your support!<br/><span>- En Vogue </span></p>

            <div className="btnContainer">
                <Link className='about-btn' to="/services">View Services</Link>
            </div>
        </section>
    

    )
}