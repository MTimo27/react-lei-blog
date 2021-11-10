import React from 'react';
import { Link } from 'react-router-dom';
import cardImg from '../../utils/images/cardImg.jpg';
import './card.css';

function Card() {
  return (
    <div className="cardContainer">
      <Link to="/article">
        <img src={cardImg} alt="" />

        <div className="cardBody">
          <div className="cardDate">
            <p>12.10.2021</p>
          </div>
          <div className="cardTitle">
            <h1>
              100 DE ANI DE LA NASTEREA REGELUI MIHAI I
            </h1>
            <hr />
          </div>

          <div className="cardDescription">
            <p>
              Se împlinește astăzi un veac de la nașterea
              ultimului Rege al românilor, Mihai I, singura
              personalitate autohtonă după Marea Unire care
              a rămas în istoria europeană ca un autentic
              făuritor de act salvator pentru țară și
              continent.....
            </p>
          </div>
          <div className="cardLink">
            Citeste mai mult
            {/* <img src="/" alt="" /> */}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
