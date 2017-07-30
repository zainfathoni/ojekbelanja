import { combineReducers } from "redux";
import keyword from "./keyword";
import order from "./order";
import user from "./user";
import stores, * as fromStores from "./stores";

const ojekBelanja = combineReducers({
  keyword,
  order,
  user,
  stores,
});

export default ojekBelanja;

export const getStores = (state) =>
  fromStores.getStores(state.stores);

export const getStore = (state, id) =>
  fromStores.getStore(state.stores, id);

export const getIsFetching = (node) => {
  switch (node) {
    case "stores":
      return fromStores.getIsFetching();
    default:
      return false;
  }
};

export const getErrorMessage = (node) => {
  switch (node) {
    case "stores":
      return fromStores.getErrorMessage();
    default:
      return false;
  }
};
