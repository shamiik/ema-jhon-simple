import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register</h2>
                <form>
                    <input type="email" name="email" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="password" id="" placeholder="your password" />
                    <br />
                    <input type="password" name="password" id="" placeholder="re-enter Password" />
                    <br />

                    <input type="submit" value="submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link> </p>
                <div>---------or---------</div>
                <button className="btn-regular">Google SignIn</button>
            </div>
        </div>
    );
};

export default Register;