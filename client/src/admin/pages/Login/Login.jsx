import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { login } from "../../../api/Auth/auth";

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        setError("");

        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add("was-validated");
            return;
        }

        try {
            setIsSubmitting(true);
            await login(formData);
            form.classList.remove("was-validated");
            navigate("/admin/dashboard");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="login-form">
            
            <div className="login-card">
                
                <h1 className="login-title display-4">Admin Login</h1>

                {error && (
                    <p className="alert alert-danger text-center">
                        {error}
                    </p>
                )}

                <form onSubmit={handleSubmit} noValidate>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            placeholder="admin@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">
                            Please enter a valid email address.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">
                            Please enter your password.
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Logging in..." : "Log In"}
                    </button>

                </form>
            </div>
        </section>
    );
}