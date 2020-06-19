var moment = require('moment'); // require

const parseDate = function(publishedAt) {
  return moment(publishedAt).format('lll');
};

export const getArticles = state => {
  return state.news.articles.map(article => ({
    ...article,
    date: parseDate(article.publishedAt),
  }));
};

export const getStatus = state => ({
  isLoading: state.news.isLoading,
  error: state.news.error,
});

export const getFavorites = state => {
  return state.user.favorites.map(article => ({
    ...article,
    date: parseDate(article.publishedAt),
  }));
};
