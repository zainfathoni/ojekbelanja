import { combineReducers } from "redux";
import order from "./order";
import user from "./user";
import stores, * as fromStores from "./stores";
import products, * as fromProducts from "./products";

const ojekBelanja = combineReducers({
  stores,
  products,
  order,
  user,
});

export default ojekBelanja;

export const getStores = (state) =>
  fromStores.getStores(state.stores);

export const getStore = (state, id) =>
  fromStores.getStore(state.stores, id);

export const getStoreKeyword = (state) =>
  fromStores.getKeyword(state.stores);

export const getIsFetching = (state, node) => {
  switch (node) {
    case "stores":
      return fromStores.getIsFetching(state.stores);
    default:
      return false;
  }
};

export const getErrorMessage = (state, node) => {
  switch (node) {
    case "stores":
      return fromStores.getErrorMessage(state.stores);
    default:
      return null;
  }
};

export const getProductKeyword = (state) =>
  fromProducts.getKeyword(state.products);
