import React from 'react';
import Card from '../../components/card/Card';
import './home.css';
import heroImg from '../../utils/images/hero2.png';

function Home() {
  return (
    <>
      <section class="hero">
        <div class="heroContainer">
          <div className="heroFirst">
            <div class="heroTitle">
              <h1>Liga Elevilor din Iaşi</h1>
            </div>
            <div class="heroText">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
              </p>
            </div>
            <div className="heroButton">
              <button>
                <a href="#">Despre noi</a>
              </button>
            </div>
          </div>

          <div className="heroSecond">
            <img src={heroImg} alt="" className="heroImg" />
          </div>
        </div>
      </section>
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
