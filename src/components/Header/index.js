import React from "react";
import "./style.css";

const Header = () => {
    return (
        <header className="header-container">
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sobre">About</a></li>
                    <li><a href="/sobre">Projects</a></li>
                    <li><a href="/contato">Social</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
