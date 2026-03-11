import hero from "./Images/contact_img.jpg";
import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact-page">
            <div className="contact-card card">
                <div className="row g-0 align-items-stretch">

                    <div className="col-12 col-md-6 contact-image-col">
                        <img
                            src={hero}
                            alt="Dog posing"
                            className="contact-image"
                        />
                    </div>

                    <div className="col-12 col-md-6 contact-form-col">
                        <div className="contact-form-content">
                            <h1 className="display-4 d-md-none contact-title">Inquire Today</h1>
                            <h1 className="display-3 d-none d-md-block contact-title">Inquire Today</h1>

                            <hr className="contact-hr" />

                            <p className="contact-intro">
                                We’d love to hear from you. Whether you’re ready to book a signature
                                experience or have a question about our services, send us a message below.
                            </p>

                            <form className="contact-form">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        placeholder="(555) 555-5555"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        rows="5"
                                        placeholder="Tell us how we can help..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn contact-submit-btn">
                                    Send Inquiry
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}