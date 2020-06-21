import React from 'react';
import {useSelector} from 'react-redux';
import ArticleList from '../components/articleList';
import {getFavorites} from '../selectors';

const FavoritesScreen = () => {
  const articles = useSelector(getFavorites);
  return <ArticleList articles={articles} />;
};

export default FavoritesScreen;
