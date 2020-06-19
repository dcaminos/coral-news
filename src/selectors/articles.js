var moment = require('moment'); // require

export const getArticles = state => {
  return state.news.articles.map(article => ({
    ...article,
    date: moment(article.publishedAt).format('lll'),
  }));
};

export const getStatus = state => ({
  isLoading: state.news.isLoading,
  error: state.news.error,
});
