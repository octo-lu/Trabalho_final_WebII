import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">Sobre</Link></li>
                    <li><Link to="/communities">Comunidades</Link></li>
                    <li><Link to="/contacts">Faça parte</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
