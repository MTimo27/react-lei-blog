import React from 'react';
import Footer from '../../components/footer/Footer';
import './about.css';

function About() {
  return (
    <>
      <section className="about">
        <div className="aboutContainer">
          <div className="aboutTitle">
            <h1>Echipa</h1>
          </div>
          <div className="aboutAvatars">
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img
                  src="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>

              <h3 className="aboutAvatarName">
                Ana Sturzu
              </h3>
              <p className="aboutAvatarDesc">Presedinte</p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img
                  src="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
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
                <img
                  src="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <h3 className="aboutAvatarName">
                Andreea Cozma
              </h3>
              <p className="aboutAvatarDesc">Secretar</p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img
                  src="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <h3 className="aboutAvatarName">Kati</h3>
              <p className="aboutAvatarDesc">Cenzor</p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img
                  src="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <h3 className="aboutAvatarName">?</h3>
              <p className="aboutAvatarDesc">HR</p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img
                  src="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <h3 className="aboutAvatarName">?</h3>
              <p className="aboutAvatarDesc">PR</p>
            </div>
            <div className="aboutAvatar">
              <div className="aboutAvatarImg">
                <img
                  src="https://images.pexels.com/photos/789296/pexels-photo-789296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
              <h3 className="aboutAvatarName">?</h3>
              <p className="aboutAvatarDesc">Foto-Video</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
