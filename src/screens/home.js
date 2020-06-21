import React from 'react';
import {useSelector} from 'react-redux';
import ArticleList from '../components/articleList';
import LoadingIcon from '../components/loadingIcon';
import {getArticles, getStatus} from '../selectors';

const HomeScreen = () => {
  const status = useSelector(getStatus);
  const articles = useSelector(getArticles);

  if (status.isLoading) {
    return <LoadingIcon />;
  }

  return <ArticleList articles={articles} />;
};

export default HomeScreen;
