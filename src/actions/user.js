export const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';
export function setCurrentArticleAction(articleId) {
  return {
    type: SET_CURRENT_ARTICLE,
    payload: articleId,
  };
}

export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export function addToFavorites(articleId) {
  return {
    type: ADD_TO_FAVORITES,
    payload: articleId,
  };
}

export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export function removeFromFavorites(articleId) {
  return {
    type: REMOVE_FROM_FAVORITES,
    payload: articleId,
  };
}
