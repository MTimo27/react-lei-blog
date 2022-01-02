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
              Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Sunt voluptatum molestiae
              minus. Ipsam perspiciatis cum repudiandae
              debitis, sapiente error ratione quod beatae
              quos maxime? Obcaecati repellendus nihil hic
              molestias et ab aperiam quasi, nam ipsum dolor
              eum est ad odio magnam fugiat distinctio illum
              vitae eveniet cumque aspernatur incidunt vero.
            </p>
            <p>
              <span className="bold">Ana Sturzu</span> -
              Presedinte
            </p>
            <p>
              <span className="bold">Telefon: </span>
              0172637181
            </p>
            <p>
              <span className="bold">Rebeca Raicu</span> -
              Vicepresedinte
            </p>
            <p>
              <span className="bold">Telefon: </span>
              9181228347
            </p>
            <p>
              <span className="bold">Email: </span>
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
