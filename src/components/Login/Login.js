import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Login.css";

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'
    console.log('came from', location.state?.from);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                // console.log(result.user)
                history.push(redirect_uri)
            })
    }
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
                <p>New to ema-john website? <Link to="/register"> Create Account</Link> </p>
                <div>---------or---------</div>
                <button className="btn-regular" onClick={handleGoogleLogin}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;