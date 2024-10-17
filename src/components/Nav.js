import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css"

export const Nav = () => {
    const navigator = useNavigate();
    const [title,setTitle] = useState("นาย")
    const [fname,setFname] = useState("กรุงศรี")
    const [lname,setLname] = useState("พระราม 3")
    const handleClick = () => {
        navigator("/");
    }
    return (
    <nav>
        <div>
            <img className="logo" src="/img/logo2.png"/>
            <div>
                <span><img className="icon" src="/img/user_img.png"/></span>
                <p>{title} {fname} {lname}</p>
                <button onClick={handleClick} className="btn">ออกจากระบบ</button>
            </div> 
        </div>
    </nav>);
}