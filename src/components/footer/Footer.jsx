import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="footerButton">
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </div>

          <div className="footerCredit">
            <p>
              &copy; All rights reserved <br />
              Liga Elevilor din Iaşi
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
