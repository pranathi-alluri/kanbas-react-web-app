import * as client from "./client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignIn() {
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const signin = async () => {
        try {
            await client.signin(credentials);
            navigate("/project/account");
        } catch (error) {
            setError(error.response.data.message)
        }
    };
    return (
        <div>
            <h1>Signin</h1>
            {error && <div className="alert alert-danger w-50">{error}</div>}
            <input className="form-control w-50" value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
            <input className="form-control w-50" value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
            <button className="btn btn-primary w-50" onClick={signin}> Signin </button>
        </div>
    );
}
export default SignIn;