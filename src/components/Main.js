import React from "react";
import { Nav } from "./Nav";
import { Body } from "./Body";

export const Main = () => {
    return (
    <div style={{height:"100vh",width:"100%"}}>
        <Nav/>
        <Body/>
    </div>
    );
}