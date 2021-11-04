import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaHeart } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <footer>
        <div className="footerContainer">
          <div className="footerButton">
            <button>
              <Link>Contact</Link>
            </button>
          </div>

          <div className="footerCredit">
            <p>
              Made with <FaHeart className="heartIcon" /> by
              <Link>Mihai Timoficiuc</Link>
              <br />
              &copy; All rights reserved LEI
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
