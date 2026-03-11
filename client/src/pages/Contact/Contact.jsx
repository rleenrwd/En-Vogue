import { useState, useEffect } from "react";
import hero from "./Images/contact_img.jpg";
import "./Contact.css";
import { submitContactForm } from "../../api/Contact/contact";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!successMessage) return;

        const timer = setTimeout(() => {
            setSuccessMessage("");
        }, 8000);
        return () => clearTimeout(timer);
    }, [successMessage]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.currentTarget;

        setSuccessMessage("");
        setErrorMessage("");

        if(!form.checkValidity()) {
            e.stopPropagation();
            form.classList.add("was-validated");
            return;
        }


        try {
            setIsSubmitting(true);

            await submitContactForm(formData);

            setSuccessMessage("We've received your message! We'll be in touch, thank you.");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });

            form.classList.remove("was-validated");
        } catch (error) {
            console.error("Error submitting contact form:", error.message);
            setErrorMessage(error.message || "Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

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

                            {successMessage && (
                                <p className="contact-success-message text-light bg-success">{successMessage}</p>
                            )}

                            {errorMessage && (
                                <p className="contact-error-message text-light bg-danger">{errorMessage}</p>
                            )}

                            <form className="contact-form needs-validation" onSubmit={handleSubmit} noValidate>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="name"
                                        placeholder="Your name"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter your name. 
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address.
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="form-control"
                                        id="phone"
                                        placeholder="(555) 555-5555"
                                        pattern="^\\+?[0-9()\\-\\s]+$"
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid phone number. 
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        id="message"
                                        rows="5"
                                        placeholder="Tell us how we can help..."
                                        required
                                    ></textarea>
                                    <div className="invalid-feedback">
                                        Please enter a message you'd like to send.
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn contact-submit-btn"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}