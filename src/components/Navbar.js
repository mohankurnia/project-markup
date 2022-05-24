import React from "react";
import ReactIcon from "../images/react-icon-sm.png";

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={ReactIcon} className="nav__logo--img" alt="react-icon"/>
            <h3 className="nav__logo--text">ReactFacts</h3>
            <h4 className="nav__title">React Course - Project 1</h4>
        </nav>
    );
};