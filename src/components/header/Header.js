import React from 'react';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';

function Header() {
    return (
        <div className="header--container">
            <div className="header__items">
                <Navigation />
            </div>

            <Hero />
        </div>
    );
}

export default Header;
