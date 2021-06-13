import React from 'react';
import './Navigation.css';

function Navigation() {
    return (
        <div className="container navigation">
            <a className="navigation__item underline__animation"
            title="About"
            href="#about">About</a>
            <a className="navigation__item underline__animation" 
            title="Experience"
            href="#experience">Experience</a>
            <a className="navigation__item underline__animation" 
            title="Let's get started"
            href="#contact">Let's get started</a>
            <a className="navigation__item underline__animation github-icon" 
            title="Github"
            target="_blank"
            href="https://github.com/bebo22">
                Find me in Github
            </a>
        </div>
    );
}

export default Navigation;
 