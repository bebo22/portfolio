import React from 'react';
import './Contact.css';
function Contact() {
    return (
        <section id="contact" className="contact">
            <h3 className="section-title">Let's get started</h3>
            <p className="container text-align-center">
                Enter your info and contact me, if you like to work with me.
            </p>
            <form className="contact--form">
                <label className="visually-hidden" htmlFor="name">Full Name:</label>
                <input id="name" type="text" name="full-name" placeholder="Enter your name" />
                <label className="visually-hidden" htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="Enter your email" />
                <label className="visually-hidden" htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" cols="50" placeholder="Example text..." />
                <input type="submit" value="Submit" />
            </form>
        </section>
    );
}

export default Contact;
