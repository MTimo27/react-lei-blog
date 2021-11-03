import React from 'react';
import Card from '../../components/card/Card';
import './home.css';
import heroImg from '../../utils/images/hero2.png';

function Home() {
  return (
    <>
      <section class="hero">
        <div class="heroContainer">
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

          <a href="#">
            <button class="heroButton">Despre noi</button>
          </a>
          <div className="heroImgContainer">
            <img src={heroImg} alt="" className="heroImg" />
          </div>
        </div>
      </section>
      {/* <div className="articles">
        <div className="articlesTitle">
          <h2>Articole</h2>
        </div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </>
  );
}

export default Home;
