import { SET_KEYWORD } from "../actions";

const keyword = (state = "", action) => {
  switch (action.type) {
    case SET_KEYWORD:
      return action.keyword
    default:
      return state;
  }
}

export default keyword;
