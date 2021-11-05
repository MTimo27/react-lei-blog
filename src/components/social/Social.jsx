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
          <div className="socialIcon">
            <FaFacebook />
          </div>
          <div className="socialIcon">
            <FaInstagram />
          </div>
        </div>
      </section>
    </>
  );
}

export default Social;
