import React from 'react';
import './card.css';

function Card() {
  return (
    <div className="cardContainer">
      <img
        src="https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/246622375_339500504613057_6302165414286729866_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jAmK10c2n7kAX-Py5sy&_nc_ht=scontent.fias1-1.fna&oh=28017c110fed829923f1973e4b48e2ad&oe=6187E572"
        alt=""
      />

      <div className="cardBody">
        <div className="cardDate">
          <p>12.10.2021</p>
        </div>
        <div className="cardTitle">
          <h1>100 DE ANI DE LA NASTEREA REGELUI MIHAI I</h1>
          <hr />
        </div>

        <div className="cardDescription">
          <p>
            Se împlinește astăzi un veac de la nașterea
            ultimului Rege al românilor, Mihai I, singura
            personalitate autohtonă după Marea Unire care a
            rămas în istoria europeană ca un autentic
            făuritor de act salvator pentru țară și
            continent.....
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
