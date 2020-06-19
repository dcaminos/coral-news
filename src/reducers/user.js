import {SET_CURRENT_ARTICLE} from '../actions/user';

const initialState = {
  currentArticle: null,
  favorites: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ARTICLE:
      return {
        ...state,
        currentArticle: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
