import React, { useState } from 'react'
import "./login.css"
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase";

const Login = () => {
    const history = useHistory();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");


    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(Email, Password).then((auth) => {
            history.push("/")
        }).catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(Email, Password).then((auth) => {
            // console.log(auth);
            if (auth) {
                history.push("/")
            }
        }).catch(error => alert(error.message))
    }
    return (
        <>
            <div className="login">
                <Link to="/">
                    <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt="" className="login_logo" />
                </Link>

                <div className="login_container">
                    <h1>Sign-in</h1>

                    <form action="#">
                        <h5>E-mail</h5>
                        <input type="text" value={Email} onChange={e => setEmail(e.target.value)} />

                        <h5>Password</h5>
                        <input type="password" value={Password} onChange={e => setPassword(e.target.value)} />

                        <button type="submit" onClick={signIn} className="login_button">Sign-in</button>
                    </form>
                    <p>By continuing, you agree to Amazon-clone's Conditions of Use and Privacy Notice.</p>
                    <button className="signup_button" onClick={register} >Create Your Amazon Account</button>
                </div>
            </div>
        </>
    )
}

export default Login
