import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import { Main } from "./Main";
 
const Login = () => {
    const navigator = useNavigate();
    const handleClick = () => {
        console.log("click!!")
        navigator("/main")
    }
    return (
    <>
        <div className="main">
            <div className="form">
                <img src="./img/logo.png"/>
                <input className="login_input" placeholder="Username"/>
                <input className="login_input" placeholder="Password"/>
                <button className="login_btn" onClick={handleClick}>Login</button>
            </div>
        </div>
    </>)
}

export default Login;