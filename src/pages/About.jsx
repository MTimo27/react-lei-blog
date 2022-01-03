import React from 'react';
import '../styles/about.css';
import Andreea from '../images/Andreea Cozma.jpeg';
import Rebeca from '../images/Rebeca Raicu.jpeg';
import Jean from '../images/Jean-Paul El-Nabbout.jpg';
import femaleUser from '../images/female-user.jpg';

function About() {
  return (
    <>
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
          <div className="aboutText">
            <h2>Lorem:</h2>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eligendi officiis odio
                aperiam quos est error dolorum, repudiandae
                animi?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eligendi officiis odio
                aperiam quos est error dolorum, repudiandae
                animi?
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Eligendi officiis odio
                aperiam quos est error dolorum, repudiandae
                animi?
              </li>
            </ul>
          </div>
          <div className="aboutTitle">
            <h1>Echipa</h1>
          </div>
          <div className="aboutAvatars">
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img src={Rebeca} alt="" />
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
                <img src={femaleUser} alt="" />
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
