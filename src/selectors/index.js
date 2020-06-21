var moment = require('moment'); // require

const parseDate = publishedAt => moment(publishedAt).format('lll');

const parseArticle = (article, state) => ({
  ...article,
  date: parseDate(article.publishedAt),
  isFavorited: state.user.favorites.includes(article.id),
});

export const getStatus = state => ({
  isLoading: state.news.isLoading,
  error: state.news.error,
});

export const getArticles = state => {
  return state.news.articles.map(article => parseArticle(article, state));
};

export const getFavorites = state => {
  return state.news.articles
    .filter(art => state.user.favorites.includes(art.id))
    .map(article => parseArticle(article, state));
};

export const getCurrentArticle = state => {
  const article = state.news.articles.find(
    art => art.id === state.user.currentArticleId,
  );
  if (article === null) return null;
  return parseArticle(article, state);
};
