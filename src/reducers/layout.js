import {SET_CURRENT_ARTICLE} from '../actions/layout';

const initialState = {
  currentArtivle: null,
  filters: {
    country: null,
    category: null,
    keywords: null,
  },
  favourite: [],
};

const filtersReducer = (state = initialState, action) => {
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
export default filtersReducer;
