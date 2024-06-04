import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="nav">
            <ul>
                <div className="logo">
                    <li>Moto Hub</li>
                </div>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/cars'>Cars</Link>
                </li>
                <li>
                    <Link to='/showcase'>Showcase</Link>
                </li>
                <li>
                    <Link to='/team'>Team</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
