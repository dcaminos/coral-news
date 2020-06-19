import {
  FETCH_NEWS_ERROR,
  FETCH_NEWS_PENDING,
  FETCH_NEWS_SUCCESS,
} from '../actions/news';

const initialState = {
  isLoading: false,
  error: null,
  articles: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_PENDING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_NEWS_SUCCESS:
      return {
        articles: action.payload,
        isLoading: false,
        error: null,
      };
    case FETCH_NEWS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default newsReducer;
