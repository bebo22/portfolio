import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <div className="navigation container">
            <a className="navigation__item underline__animation"
            title="About"
            href="#about">About</a>
            <a className="navigation__item underline__animation" 
            title="Experience"
            href="#experience">Experience</a>
        </div>
    );
}

export default Navigation;
 