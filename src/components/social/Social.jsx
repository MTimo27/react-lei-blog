import React from 'react';
import './social.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function Social() {
  return (
    <>
      <section className="social">
        <div className="socialTitle">
          <h2>Urmareste-ne si pe social media</h2>
        </div>
        <div className="socialContainer">
          <a href="https://www.facebook.com">
            <div className="socialIcon">
              <FaFacebook />
            </div>
          </a>
          <a href="https://www.facebook.com">
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
