import {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css";
import {login} from "../../../api/Auth/auth";

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
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        setError("");

        if(!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add("was-validated");
            return;
        }

        try {
            setIsSubmitting(true);
            await login(formData);
            navigate("/admin/dashboard");
            form.classList.remove("was-validated");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }

        
    }   


    return (
        <>
        
            <section className="login-form">

                {error && <p className="alert alert-danger">{error}</p>}

                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input name="email" value={formData.email} type="email" className="form-control" onChange={handleChange} id="email" placeholder="admin@example.com" required/>

                        <div className="invalid-feedback">
                            Please enter a valid email address. 
                        </div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input name="password" value={formData.password} onChange={handleChange} type="password" className="form-control" id="password" placeholder="Enter password" required/>

                        <div className="invalid-feedback">
                            Please enter your password.
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Logging in..." : "Log In"}</button>
                </form>
            </section>
        </>
    )
}

