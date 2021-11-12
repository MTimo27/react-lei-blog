import React, { useState } from 'react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
} from '@firebase/firestore';
import { useEffect } from 'react/cjs/react.development';
import { db, baseUrl, storage } from '../../firebase';
import './article.css';
import { useParams } from 'react-router';
import { getDownloadURL, ref } from '@firebase/storage';
import Markdown from 'markdown-to-jsx';
import axios from 'axios';

const articlesRef = collection(db, 'articles');

function Article() {
  const [article, setArticle] = useState();
  const [articleBody, setArticleBody] = useState();
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchBody = async (bodyUrl) => {
      const mdRef = ref(storage, bodyUrl);
      const url = await getDownloadURL(mdRef);

      const res = await axios.get(url);

      setArticleBody(res.data);
    };

    const fetch = async () => {
      try {
        const snapshot = await getDoc(doc(articlesRef, id));

        setArticle(snapshot.data());
        fetchBody(snapshot.data().body);
      } catch (err) {
        setIsError(true);
      }
    };

    fetch();
  }, [id]);

  if (isError) return <div>not found</div>;
  else if (!article || !articleBody) return <div></div>;

  return (
    <>
      <section className="article">
        <div className="articleImg">
          <img src={article.thumbnail} alt="thumbnail" />
        </div>
        <div className="articleContainer">
          <div className="articleTitle">
            <h1>{article.title}</h1>
          </div>

          <div className="articleText firstLetter">
            <Markdown>{articleBody}</Markdown>
          </div>
        </div>
      </section>
    </>
  );
}

export default Article;
