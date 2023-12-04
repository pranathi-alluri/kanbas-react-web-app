import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({
                                                       username: "", password: "" });
    const navigate = useNavigate();
    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };
    return (
        <div>
            <h1>Signup</h1>
            {error && <div className="alert alert-danger w-50">{error}</div>}
            <input
                value={credentials.username}
                className="form-control w-50"
                placeholder="Username"
                onChange={(e) => setCredentials({
                                                    ...credentials,
                                                    username: e.target.value })} />
            <input
                value={credentials.password}
                className="form-control w-50"
                type="password"
                placeholder="Password"
                onChange={(e) => setCredentials({
                                                    ...credentials,
                                                    password: e.target.value })} />
            <button className="btn btn-primary w-50" onClick={signup}>
                Signup
            </button>
        </div>
    );
}
export default Signup;