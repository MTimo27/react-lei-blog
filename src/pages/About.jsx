import React from 'react';
import '../styles/about.css';
import Andreea from '../images/Andreea Cozma.jpeg';
import Rebeca from '../images/Rebeca Raicu.jpeg';
import Jean from '../images/Jean-Paul El-Nabbout.jpg';
import Ana from '../images/Ana Sturzu.jpeg';
import User from '../images/User.png';

function About() {
  return (
    <>
      *
      <section className="about">
        <div className="aboutContainer">
          <div className="aboutTitle">
            <h1>Cine suntem?</h1>
          </div>
          <div className="aboutText">
            <h2>
              Liga Elevilor din Iași - LEI, este o
              organizație de tip non-profit ce are ca scop:
            </h2>
            <ul>
              <li>
                Reprezentarea intereselor comune ale
                elevilor (din Iași și nu numai).
              </li>
              <li>
                Apărarea și promovarea drepturilor,
                obligațiilor și intereselor elevilor.
              </li>
              <li>
                Stimularea participării acestora la actul
                educațional și viața socială, economică și
                culturală.
              </li>
            </ul>
          </div>
          <div className="aboutTitle">
            <h1>Misiune si obiective</h1>
          </div>
          <div className="aboutText">
            <h2>Ne propunem:</h2>
            <ul>
              <li>
                Realizarea și sprijinirea de proiecte și
                programe socio-culturale și educaționale.
              </li>
              <li>
                Instruirea de formatori în domeniul
                educației non-formale, dezvoltarea
                activităților de voluntariat și activism
                civic.
              </li>
              <li>
                Creșterea spiritului de inițiativă,
                responsabilitate, solidaritate și
                antreprenoriat ale tinerilor.
              </li>
            </ul>
          </div>
          <div className="aboutTitle">
            <h1>Principii</h1>
          </div>
          <div className="aboutText principii">
            <ul>
              <li>Unitate</li>
              <li>Corectitudine</li>
              <li>Integritate</li>
              <li>Responsabilitate</li>
              <li>Cunoastere</li>
            </ul>
            <ul>
              <li>Curaj</li>
              <li>Transparenta</li>
              <li>Legitimitate</li>
              <li>Independenta</li>
              <li>Determinare</li>
            </ul>
          </div>
          <div className="aboutTitle">
            <h1>Echipa</h1>
          </div>
          <div className="aboutAvatars">
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img src={Ana} alt="" />
              </div>

              <h3 className="aboutAvatarName">
                Ana Sturzu
              </h3>
              <p className="aboutAvatarDesc">Presedinte</p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img src={Rebeca} alt="" />
              </div>
              <h3 className="aboutAvatarName">
                Rebeca Raicu
              </h3>
              <p className="aboutAvatarDesc">
                Vicepresedinte
              </p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img src={Andreea} alt="" />
              </div>
              <h3 className="aboutAvatarName">
                Andreea Cozma
              </h3>
              <p className="aboutAvatarDesc">Secretar</p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img src={Rebeca} alt="" />
              </div>
              <h3 className="aboutAvatarName">Kati</h3>
              <p className="aboutAvatarDesc">Cenzor</p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img src={Jean} alt="" />
              </div>
              <h3 className="aboutAvatarName">
                Jean-Paul <br /> El-Nabbout
              </h3>
              <p className="aboutAvatarDesc">
                Coordonator HR
              </p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img src={User} alt="" />
              </div>
              <h3 className="aboutAvatarName">
                Maria <br /> Furduescu-Clinc
              </h3>
              <p className="aboutAvatarDesc">
                Coordonator PR
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
