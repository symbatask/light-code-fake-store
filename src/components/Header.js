import React from "react";
import { NavLink } from "react-router-dom";



const Header = () => {
    return (
        <div className="header">

            <div className="header__wrapper">
                <NavLink to="/" className="header__logo">
                    ZARA
                </NavLink>
                <nav className="header__nav">
                    <NavLink to="/" className="header__link">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="header__link">
                        About
                    </NavLink>
                    <NavLink to="/login" className="header__link">
                        Login
                    </NavLink>

                </nav>
            </div>

        </div>

    )
}

export default Header 