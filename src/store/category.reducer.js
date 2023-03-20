import { SET_CATEGORY_FILTER } from "../actions/category.action";

const initialState = {};

export default function categoryFilterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
