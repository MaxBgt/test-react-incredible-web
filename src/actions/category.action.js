export const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";

export const setCategoryFilter = (string) => {
  return (dispatch) => {
    return dispatch({ type: SET_CATEGORY_FILTER, payload: string });
  };
};
