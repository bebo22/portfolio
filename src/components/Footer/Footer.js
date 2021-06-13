import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>

            <div className="footer__summary--container">
                <blockquote className="footer__summary">
                    Experience is the name everyone gives to their mistakes.
                </blockquote>
            </div>
            <p className="footer__summary--author">
                Oscar Wilde
            </p>

            <h4 className="footer--social__title">Find me in social media</h4>
            <ul className="footer--social">
                <li className="footer--social__item linkedin">
                    <a title="Linkedin" target="_blank" href="https://www.linkedin.com/in/bolivar-berrio-648340155/"></a>
                </li>
                <li className="footer--social__item github">
                    <a title="Github" target="_blank" href="https://github.com/bebo22"></a>
                </li>
                <li className="footer--social__item mail">
                    <a title="Github" target="_blank" href="mailto:berriobolivar@gmail.com"></a>
                </li>
            </ul>

            <div className="footer--disclaimer">
                <p className="footer--disclaimer__tools">
                    Made with React Js
                </p>
                <p className="footer--disclaimer__author">
                    Bolivar Berrio
                </p>
            </div>

        </footer>
    );
}

export default Footer;
