import React from 'react';
import {useSelector} from 'react-redux';
import Article from '../components/article';
import {getCurrentArticle} from '../selectors';

const ArticleScreen = () => {
  const currentArticle = useSelector(getCurrentArticle);

  return <Article article={currentArticle} />;
};

export default ArticleScreen;
