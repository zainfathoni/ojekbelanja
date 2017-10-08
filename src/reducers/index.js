import { combineReducers } from "redux";
import order, * as fromOrder from "./order";
import user, * as fromUser from "./user";
import stores, * as fromStores from "./stores";
import products, * as fromProducts from "./products";

const ojekBelanja = combineReducers({
  stores,
  products,
  order,
  user
});

export default ojekBelanja;

export const getStores = state => fromStores.getStores(state.stores);
export const getStore = (state, id) => fromStores.getStore(state.stores, id);
export const getCost = (state, id) => fromStores.getCost(state.stores, id);
export const getStoreKeyword = state => fromStores.getKeyword(state.stores);
export const getStoreIsFetching = state =>
  fromStores.getIsFetching(state.stores);
export const getStoreError = state => fromStores.getError(state.stores);
export const getFilteredStoreCards = state =>
  fromStores.getFilteredStoreCards(state.stores);

export const getCategories = state =>
  fromProducts.getCategories(state.products);
export const getCategory = (state, id) =>
  fromProducts.getCategory(state.products, id);
export const getProducts = state => fromProducts.getProducts(state.products);
export const getProduct = (state, id) =>
  fromProducts.getProduct(state.products, id);
export const getProductKeyword = state =>
  fromProducts.getKeyword(state.products);
export const getProductIsFetching = state =>
  fromProducts.getIsFetching(state.products);
export const getProductError = state => fromProducts.getError(state.products);
export const isProductMatching = (state, id) =>
  fromProducts.isMatching(state.products, id);

export const getOrder = state => fromOrder.getOrder(state.order);
export const getOrderCount = state => fromOrder.getOrderCount(state.order);
export const getOrderQty = (state, id) =>
  fromOrder.getOrderQty(state.order, id);

export const isValid = (state, field) => fromUser.isValid(state.user, field);
export const isUserValid = state => fromUser.isUserValid(state.user);
export const isRequired = field => fromUser.isRequired(field);
export const isRequirementFulfilled = (state, field) =>
  fromUser.isRequirementFulfilled(state.user, field);
export const areRequirementsFulfilled = state =>
  fromUser.areRequirementsFulfilled(state.user);

// Avoid Floating Point Problem
const escapeFloatingPoint = value => Math.round(value * 100) / 100;

export const getQuantity = (state, id) => {
  const product = getProduct(state, id);
  const count = getOrderQty(state, id);

  if (product && count > 0) {
    const { step, unit } = product;
    const steps = escapeFloatingPoint(count * step);
    return steps < 1 && unit === "kg"
      ? `${steps * 1000} gram`
      : `${steps} ${unit}`;
  }
  return undefined;
};
export const getQuantities = state =>
  Object.keys(getOrder(state)).reduce(
    (res, key) => ({
      ...res,
      [key]: getQuantity(state, key)
    }),
    {}
  );

export const getSubtotal = (state, id) => {
  const products = getProduct(state, id);
  const count = getOrderQty(state, id);

  if (products && count > 0) {
    const { step, price } = getProduct(state, id);
    return `Rp ${(count * step * price).toLocaleString("id")}`;
  }
  return undefined;
};
export const getSubtotals = state =>
  Object.keys(getOrder(state)).reduce(
    (res, key) => ({
      ...res,
      [key]: getSubtotal(state, key)
    }),
    {}
  );

export const getTotal = state => {
  const order = getOrder(state);
  const products = getProducts(state);
  return Object.keys(products).length
    ? Object.keys(order).reduce(
        (sum, key) =>
          sum + products[key].price * products[key].step * order[key],
        0
      )
    : 0;
};

export const getFilteredProductCards = state =>
  Object.keys(getProducts(state))
    .filter(key => isProductMatching(state, key))
    .map(key => {
      const product = getProduct(state, key);
      return {
        id: key,
        section: product.category,
        title: product.name,
        description: product.desc,
        image: require(`../css/images/${product.image}`),
        price: product.price,
        unit: product.unit,
        overlay: getQuantity(state, key),
        disabled: product.empty,
        ribbon: product.promo,
        tooltip: product.promo_desc
      };
    })
    .reduce(
      (res, product) => ({
        ...res,
        [product.id]: product
      }),
      {}
    );

export const getOrderListItems = state =>
  Object.keys(getOrder(state))
    .map(key => {
      const product = getProduct(state, key);
      return {
        id: key,
        name: product.name,
        desc: product.desc,
        image: require(`../css/images/${product.image}`),
        unit: product.unit,
        step: product.step,
        price: product.price,
        count: getOrderQty(state, key),
        quantity: getQuantity(state, key),
        subtotal: getSubtotal(state, key)
      };
    })
    .reduce(
      (res, item) => ({
        ...res,
        [item.id]: item
      }),
      {}
    );
