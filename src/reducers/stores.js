import { combineReducers } from "redux";
import {
  SET_STORE_KEYWORD,
  FETCH_STORES_SUCCESS,
  FETCH_STORE_SUCCESS,
} from '../actions';

const items = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STORES_SUCCESS:
      return action.stores;
    case FETCH_STORE_SUCCESS:
      return { ...state, [action.id]: action.store };
    default:
      return state;
  }
}

const keyword = (state = "", action) => {
  switch (action.type) {
    case SET_STORE_KEYWORD:
      return action.keyword
    default:
      return state;
  }
}

const isFetching = (state = false, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const errorMessage = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const stores = combineReducers({
  items,
  keyword,
  isFetching,
  errorMessage,
})

export default stores;

export const getStores = (state) => state.items;
export const getStore = (state, id) => state.items[id];
export const getKeyword = (state) => state.keyword;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
