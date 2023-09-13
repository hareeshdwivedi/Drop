import React from "react";
import Menu from "./menu";
import { sideNav } from "../../constants/menuItem";
import './style.css'

const Sider = () => {
    return (
       <div className="nav-box">
            <Menu menuItem={sideNav}/>
       </div> 
    )
}

export default Sider;