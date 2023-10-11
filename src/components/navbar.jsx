import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export function Navbar() {
    return(
        <header>
            <div className="container container-nav">
                <div className="title">
                    <h1 className="header">Rugie's Shop</h1>
                    <p className="header-subtitle">Your One Stop Sample Shop</p>
                </div>
                <nav className="navbar">
                    <ul>
                        <li><Link to={"/"}>Shop</Link></li>
                        <li><Link to={"/cart"}>Cart</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}