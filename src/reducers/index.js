import { combineReducers } from "redux";
import order, * as fromOrder from "./order";
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

export const getStores = (state) => fromStores.getStores(state.stores);
export const getStore = (state, id) => fromStores.getStore(state.stores, id);
export const getCost = (state, id) => fromStores.getStore(state.stores, id);
export const getStoreKeyword = (state) => fromStores.getKeyword(state.stores);
export const getStoreIsFetching = (state) => fromStores.getIsFetching(state.stores);
export const getStoreError = (state) => fromStores.getError(state.stores);

export const getCategories = (state) => fromProducts.getCategories(state.products);
export const getProducts = (state) => fromProducts.getProducts(state.products);
export const getProduct = (state, id) => fromProducts.getProduct(state.products, id);
export const getProductKeyword = (state) => fromProducts.getKeyword(state.products);
export const getProductIsFetching = (state) => fromProducts.getIsFetching(state.products);
export const getProductError = (state) => fromProducts.getError(state.products);

export const getOrder = (state) => fromOrder.getOrder(state.order);
export const getOrderCount = (state, id) => fromOrder.getOrderCount(state.order, id);

// Avoid Floating Point Problem
const escapeFloatingPoint = (value) =>
  Math.round(value * 100) / 100;

export const getQuantity = (state, id) => {
  const count = getOrderCount(state, id);
  const { step, unit } = getProduct(state, id);
  if (count > 0) {
    const steps = escapeFloatingPoint(count * step);
    return (steps < 1 && unit === "kg") ?
      `${steps * 1000} gram`
      :
      `${steps} ${unit}`;
  } else {
    return undefined;
  }
}


export const getTotal = (state) => {
  const order = getOrder(state);
  const products = getProducts(state);
  return Object.keys(products).length ?
    Object.keys(order)
      .reduce((sum, key) =>
        sum + (products[key].price * products[key].step * order[key]),
        0
      )
  :
    0;
}
