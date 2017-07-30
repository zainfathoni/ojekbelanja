import { combineReducers } from "redux";
import {
  SET_PRODUCT_KEYWORD,
} from '../actions';

const keyword = (state = "", action) => {
  switch (action.type) {
    case SET_PRODUCT_KEYWORD:
      return action.keyword
    default:
      return state;
  }
}

const products = combineReducers({
  keyword,
})

export default products;

export const getKeyword = (state) => state.keyword;
