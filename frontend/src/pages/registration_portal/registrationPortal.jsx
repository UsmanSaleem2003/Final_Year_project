import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registrationPortal.css";

const RegistrationPortal = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
        birthdate: ""
    });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setPasswordMatch(formData.password === formData.confirmPassword && formData.password !== "");
    }, [formData.password, formData.confirmPassword]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isValidBirthdate = (date) => {
        const today = new Date();
        const birthDate = new Date(date);
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        return age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!passwordMatch) {
            setError(true);
            setErrorMessage("Passwords do not match!");
            return;
        }

        if (!isValidBirthdate(formData.birthdate)) {
            setError(true);
            setErrorMessage("You must be at least 18 years old to register.");
            return;
        }

        const { confirmPassword, ...requestData } = formData; // Exclude confirmPassword

        try {
            const response = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();

            if (response.ok) {
                navigate("/");
            } else {
                setError(true);
                setErrorMessage(data.message);
            }
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
            console.error("Signup Error:", error);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>User Registration</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        value={formData.fullname}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className={passwordMatch ? "password-match" : ""}
                        required
                    />
                    {passwordMatch && <div className="password-match-text">Passwords Match ✔</div>}

                    <select className="gender-selection" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>

                    <input
                        type="date"
                        name="birthdate"
                        value={formData.birthdate}
                        onChange={handleChange}
                        max={new Date().toISOString().split("T")[0]}
                        required
                    />

                    <button type="submit" className="signup-btn">Signup</button>
                    {error && <div className="error-message">{errorMessage}</div>}
                </form>
                <p className="signup-link">
                    Already have an account? <Link to="/login">Login Here</Link>
                </p>
            </div>
        </div>
    );
};

export default RegistrationPortal;
