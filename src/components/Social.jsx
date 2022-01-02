import React from 'react';
import '../styles/social.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Social() {
  return (
    <>
      <section className="social">
        <div className="socialTitle">
          <h2>Urmărește-ne și pe social media</h2>
        </div>
        <div className="socialContainer">
          <a
            href="https://www.facebook.com/ligaeleviloriasi.ro"
            rel="noreferrer"
            target="_blank"
          >
            <div className="socialIcon">
              <FaFacebook />
            </div>
          </a>
          <a
            href="https://www.instagram.com/ligaeleviloriasi"
            rel="noreferrer"
            target="_blank"
          >
            <div className="socialIcon">
              <FaInstagram />
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

export default Social;
