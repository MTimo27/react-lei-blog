import React from 'react';
import '../styles/contact.css';
import Social from '../components/Social';

function Contact() {
  return (
    <>
      <section className="contact">
        <div className="contactContainer">
          <div className="contactTitle">
            <h1>Contact</h1>
          </div>
          <div className="contactText">
            <p>
              <span className="bold">Ana Sturzu</span> -
              Presedinte
            </p>
            <p>
              <span className="bold">Telefon: </span>
              0750877446
            </p>
            <p>
              <span className="bold">Rebeca Raicu</span> -
              Vicepresedinte
            </p>
            <p>
              <span className="bold">Telefon: </span>
              0744353953
            </p>
            <p>
              <span className="bold">Email: </span>
              ligaeleviloriasi@gmail.com
            </p>
          </div>
        </div>
      </section>
      <Social />
    </>
  );
}

export default Contact;
