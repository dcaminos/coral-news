import {FETCH_NEWS_SUCCESS} from '../actions/news';
import {
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
  SET_CURRENT_ARTICLE,
} from '../actions/user';

const initialState = {
  currentArticleId: null,
  favorites: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_SUCCESS:
      return initialState;
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        currentArticleId: action.payload,
      };
    case ADD_TO_FAVORITES:
      const indexToAdd = state.favorites.indexOf(action.payload);
      if (indexToAdd === -1) {
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
      return state;
    case REMOVE_FROM_FAVORITES:
      const indexToRemove = state.favorites.indexOf(action.payload);
      if (indexToRemove > -1) {
        return {
          ...state,
          favorites: [
            ...state.favorites.slice(0, indexToRemove),
            ...state.favorites.slice(indexToRemove + 1),
          ],
        };
      }
      return state;
    default:
      return state;
  }
};
export default userReducer;
