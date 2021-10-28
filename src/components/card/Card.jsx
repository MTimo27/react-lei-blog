import React from 'react';
import './card.css';

function Card() {
  return (
    <div className="cardContainer">
      <img
        src="https://images.pexels.com/photos/827209/pexels-photo-827209.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />

      <div className="cardBody">
        <div className="cardDate">
          <p>12.10.2021</p>
        </div>
        <div className="cardTitle">
          <h1>
            Liga Studenților din Iași se opune introducerii
            certificatului verde în universități
          </h1>
          <hr />
        </div>

        <div className="cardDescription">
          <p>
            Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Quos ipsum placeat repudiandae
            commodi obcaecati necessitatibus soluta
            aperiam....
          </p>
        </div>
        <div className="cardLink">
          Citeste mai mult
          {/* <img src="/" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
