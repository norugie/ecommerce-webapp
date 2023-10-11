import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
    return(
        <div className="navbar">
            <div class="links">
                <Link to={"/"}>Shop</Link>
                <Link to={"/cart"}>Cart</Link>
            </div>
        </div>
    );
}