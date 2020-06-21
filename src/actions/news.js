import {sha256} from 'react-native-sha256';
export const FETCH_NEWS_PENDING = 'FETCH_NEWS_PENDING';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';

const API_URL = 'https://newsapi.org/v2/top-headlines';
const COUNTRY = 'us';
const API_KEY = '67ad268a66e34410a7b1300a48c329b2';

function fetchNewsPending() {
  return {
    type: FETCH_NEWS_PENDING,
  };
}

function fetchNewsSuccess(articles) {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: articles,
  };
}

function fetchNewsError(error) {
  return {
    type: FETCH_NEWS_ERROR,
    payload: error,
  };
}

export const fetchNewsAction = () => {
  return async dispatch => {
    dispatch(fetchNewsPending());

    const url = new URL(API_URL);
    url.searchParams.append('country', COUNTRY);
    url.searchParams.append('apiKey', API_KEY);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.status === 'error') {
          throw res.message;
        }

        return Promise.all(res.articles.map(parseArticle));
      })
      .then(articles => {
        dispatch(fetchNewsSuccess(articles));
      })
      .catch(error => {
        dispatch(fetchNewsError(error));
      });
  };
};

const parseArticle = article => {
  return sha256(article.publishedAt + article.title).then(hash => {
    return {
      id: hash,
      ...article,
    };
  });
};
