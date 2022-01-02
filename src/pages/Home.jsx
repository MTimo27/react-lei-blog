import React, {
  Children,
  useEffect,
  useState,
} from 'react';
import Card from '../components/Card';
import Social from '../components/Social';
import '../styles/home.css';
import heroImg from '../images/hero.png';
import { Link } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from '@firebase/firestore';
import Spinner from '../components/Spinner';

function Home() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = async () => {
      const querySnapshot = await getDocs(
        collection(db, 'articles')
      );
      setArticles(
        querySnapshot.docs.reverse().map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    data();
    setLoading(true);
  }, []);
  return (
    <>
      <section className="hero">
        <div className="heroContainer">
          <div className="heroFirst">
            <div className="heroTitle">
              <h1>Liga Elevilor din Iaşi</h1>
            </div>
            <div className="heroText">
              <p>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam.
              </p>
            </div>
            <div className="heroButton">
              <button>
                <Link to="/about">Despre noi</Link>
              </button>
            </div>
          </div>
          <div className="heroSecond">
            <img
              src={heroImg}
              alt="LEI Logo"
              className="heroImg"
            />
          </div>
        </div>
      </section>

      <Social />
      <section className="articles">
        {loading || articles ? (
          <div className="articlesContainer">
            <div className="articlesTitle">
              <h2>Articole</h2>
            </div>
            <div className="articlesCards">
              {Children.toArray(
                articles.map((article) => (
                  <Card article={article} />
                ))
              )}
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </section>
    </>
  );
}

export default Home;
