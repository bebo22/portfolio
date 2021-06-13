import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import './Experience.css';

function Experience() {
    return (
        <div id="experience" className="experience">
            <h3 className="section-title">Experience</h3>
            <p className="container text-align-center">
                Technologies that i have worked with before.
            </p>
            <ul className="experience--list">
                <li className="experience--list__element react-logo">
                    <ScrollAnimation animateOnce={true} animateIn="fadeIn" delay={400}>
                        <img alt="React" src={require('../../assets/react-logo.svg').default} />
                    </ScrollAnimation>
                </li>
                <li className="experience--list__element">
                    <ScrollAnimation animateOnce={true} delay={500} animateIn="fadeIn">
                        <img alt="Drupal" src={require('../../assets/drupal-logo.svg').default} />
                    </ScrollAnimation>
                </li>
                <li className="experience--list__element">
                    <ScrollAnimation animateOnce={true} delay={500} animateIn="fadeIn">
                        <img alt="Javascript" src={require('../../assets/javascript-logo.svg').default} />
                    </ScrollAnimation>
                </li>
                <li className="experience--list__element">
                    <ScrollAnimation animateOnce={true} delay={550} animateIn="fadeIn">
                        <img alt="HTML" src={require('../../assets/html-logo.svg').default} />
                    </ScrollAnimation>
                </li>
                <li className="experience--list__element">
                    <ScrollAnimation animateOnce={true} delay={600} animateIn="fadeIn">
                        <img alt="css" src={require('../../assets/css-logo.svg').default} />
                    </ScrollAnimation>
                </li>
                <li className="experience--list__element">
                    <ScrollAnimation animateOnce={true} delay={650} animateIn="fadeIn">
                        <img alt="sass" src={require('../../assets/sass-logo.svg').default} />
                    </ScrollAnimation>
                </li>
            </ul>
        </div>
    );
}


export default Experience;
