export const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';
export function setCurrentArticleAction(article) {
  return {
    type: SET_CURRENT_ARTICLE,
    payload: article,
  };
}
