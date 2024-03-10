import React from "react";
import "./style.css";

const Header = () => {
    return (
        <header className="header-container">
            <nav>
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Experience</a></li>
                    <li><a href="/">Languages</a></li>
                    <li><a href="/">Projects</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
