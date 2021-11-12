import React from 'react';
import { Link } from 'react-router-dom';
import cardImg from '../../utils/images/cardImg.jpg';
import './card.css';

function Card({ article }) {
  const { title, date, thumbnail, id } = article;

  return (
    <div className="cardContainer">
      <Link to={'/article/' + id}>
        <img src={thumbnail} alt="" />

        <div className="cardBody">
          <div className="cardDate">
            <p>{date}</p>
          </div>
          <div className="cardTitle">
            <h1>{title}</h1>
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
          <div className="cardLink">Citeste mai mult</div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
