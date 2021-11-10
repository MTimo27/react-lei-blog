import React from 'react';
import './contact.css';
import Social from '../../components/social/Social';

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
              <span style={{ fontWeight: 900 }}>
                Ana Sturzu
              </span>{' '}
              - Presedinte
            </p>
            <p>
              <span style={{ fontWeight: 900 }}>
                Telefon:
              </span>{' '}
              0172637181
            </p>
            <p>
              <span style={{ fontWeight: 900 }}>
                Rebeca Raicu
              </span>{' '}
              - Vicepresedinte
            </p>
            <p>
              <span style={{ fontWeight: 900 }}>
                Telefon:
              </span>{' '}
              9181228347
            </p>
            <p>
              {' '}
              <span style={{ fontWeight: 900 }}>
                Email:{' '}
              </span>
              lei@gmail.com
            </p>
          </div>
        </div>
      </section>
      <Social />
    </>
  );
}

export default Contact;
