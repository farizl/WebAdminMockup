import React, { useState } from "react";
import { Link,NavLink,Outlet } from "react-router-dom";
import './Body.css'

export const Body = () => {
    return (
    <div className="Body">
        <div className="side_bar">
            <ul>
                {/* <NavLink className="link" to="/main/thaiid"><li><span><img className="icon" src="/img/thaiid.png"/></span>ThaiID</li></NavLink>
                <NavLink className="link" to="/main/passport"><li><span><img className="icon" src="/img/passport.png"/></span>Passport</li></NavLink> */}
                <NavLink className="link" to="/main/transaction"><li><span><img className="icon" src="/img/summarize.png"/></span>Transaction</li></NavLink>
                <NavLink className="link" to="/main/auditTrail"><li><span><img className="icon" src="/img/transaction.png"/></span>Audit Trail</li></NavLink>
                <NavLink className="link" to="/main/activityLog"><li><span><img className="icon" src="/img/activity.png"/></span>Activity Log</li></NavLink>
                {/* <NavLink className="link" to="/main/userManagement"><li><span><img className="icon" src="/img/user.png"/></span>User Management</li></NavLink>
                <NavLink className="link" to="/main/settings"><li><span><img className="icon" src="/img/setting.png"/></span>Settings</li></NavLink> */}
            </ul>
        </div>
        <Outlet/>
    </div>
    )
}