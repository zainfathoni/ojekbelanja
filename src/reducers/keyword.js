import {
  KEYWORD_SET,
  KEYWORD_CLEAR,
} from '../actions';

const keyword = (state = "", action) => {
  switch (action.type) {
    case KEYWORD_SET:
      return action.keyword
    case KEYWORD_CLEAR:
      return "";
    default:
      return state;
  }
}

export default keyword;
