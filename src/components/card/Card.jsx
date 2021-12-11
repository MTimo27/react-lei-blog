import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({ article }) {
  const { title, date, thumbnail, id, overview } = article;

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
            <p>{overview}</p>
          </div>
          <div className="cardLink">Citește mai mult</div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
