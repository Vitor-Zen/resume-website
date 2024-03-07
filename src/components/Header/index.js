import React from "react";
import "./style.css";

const Header = () => {
    return (
        <header className="header-container">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/social-container">Social</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
