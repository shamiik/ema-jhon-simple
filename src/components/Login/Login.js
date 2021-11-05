import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" id="" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-john?<Link to="/register">Create Account</Link> </p>
                <div>---------or---------</div>
                <button className="btn-regular">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;