import React, { useState } from 'react';
import { collection, getDocs } from '@firebase/firestore';
// import {
//   getStorage,
//   ref,
//   getDownloadURL,
// } from 'firebase/storage';
import { useEffect } from 'react/cjs/react.development';
import { db, baseUrl } from '../../firebase';
import './article.css';

function Article() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchIt = async () => {
      const querySnapshot = await getDocs(
        collection(db, 'articles')
      );

      setArticles(
        querySnapshot.docs.map((doc) => doc.data())
      );
    };

    fetchIt();
  }, []);

  // /*img*/

  // const [imageUrl, setImageUrl] = useState();

  // const fetch = async () => {
  //   const storage = getStorage();

  //   const url = await getDownloadURL(
  //     ref(storage, baseUrl + 'favicon.jpg')
  //   );

  //   setImageUrl(url);
  // };

  // useEffect(() => {
  //   fetch();
  //   return () => {};
  // }, []);

  return (
    <>
      <section className="article">
        <div className="articleImg">
          {articles.map((a) => {
            return <img src={a.thumbnail} alt=""></img>;
          })}
        </div>
        <div className="articleContainer">
          <div className="articleTitle">
            <h1>
              {articles.map((a) => {
                return <div>{a.title}</div>;
              })}
            </h1>
          </div>
          <div className="articleText">
            {articles.map((a) => {
              return <div>{a.date}</div>;
            })}
          </div>
          <div className="articleText firstLetter">
            {articles.map((a) => {
              return <div>{a.body}</div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Article;
