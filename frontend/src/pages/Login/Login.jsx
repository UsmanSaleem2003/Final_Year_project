import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/authContext";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();
    // const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // const data = await response.json();

            if (response.ok) {
                // login(data.token, data.user);
                navigate("/");
            } else {
                setError(true);
                setErrorMessage("Wrong Credentials");
            }
        } catch (error) {
            setError(true);
            setErrorMessage("Server Error");
            console.error("Login Error:", error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Log In</h2>
                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type={passwordVisible ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={passwordVisible}
                            onChange={() => setPasswordVisible(!passwordVisible)}
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>
                    {error && <div className="error-message">{errorMessage}</div>}
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
