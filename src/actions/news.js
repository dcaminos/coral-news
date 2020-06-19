export const FETCH_NEWS_PENDING = 'FETCH_NEWS_PENDING';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';

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

export const fetchNewsAction = filters => {
  return async dispatch => {
    dispatch(fetchNewsPending());
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + API_KEY)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        if (res.status === 'error') {
          throw res.message;
        }

        dispatch(fetchNewsSuccess(res.articles));
      })
      .catch(error => {
        dispatch(fetchNewsError(error));
      });
  };
};
