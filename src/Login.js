import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className="login">
                <Link to="/">
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt="" className="login_logo" />
                </Link>

                <div className="login_container">
                    <h1>Sign-in</h1>

                    <form action="#">
                        <h5>E-mail</h5>
                        <input type="text" />

                        <h5>Password</h5>
                        <input type="password" />

                        <button>Sign-in</button>
                    </form>
                    <p>By continuing, you agree to Amazon-clone's Conditions of Use and Privacy Notice.</p>
                </div>
            </div>
        </>
    )
}

export default Login
