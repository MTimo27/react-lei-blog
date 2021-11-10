import React from 'react';
import Card from '../../components/card/Card';
import './home.css';
import heroImg from '../../utils/images/hero2.png';
import { Link } from 'react-router-dom';
import Social from '../../components/social/Social';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="heroContainer">
          <div className="heroFirst">
            <div className="heroTitle">
              <h1>Liga Elevilor din Iaşi</h1>
            </div>
            <div className="heroText">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
              </p>
            </div>
            <div className="heroButton">
              <button>
                <Link to="/about">Despre noi</Link>
              </button>
            </div>
          </div>

          <div className="heroSecond">
            <img src={heroImg} alt="" className="heroImg" />
          </div>
        </div>
      </section>

      <Social />

      <section className="articles">
        <div className="articlesContainer">
          <div className="articlesTitle">
            <h2>Articole</h2>
          </div>
          <div className="articlesCards">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
