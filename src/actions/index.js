export const ORDER_PLUS = "ORDER_PLUS";
export const ORDER_MINUS = "ORDER_MINUS";
export const ORDER_SET = "ORDER_SET";
export const ORDER_REMOVE = "ORDER_REMOVE";
export const ORDER_CLEAN = "ORDER_CLEAN";
export const ORDER_CLEAR = "ORDER_CLEAR";
export const KEYWORD_SET = "KEYWORD_SET";
export const KEYWORD_CLEAR = "KEYWORD_CLEAR";
export const USER_SET = "USER_SET";
export const USER_CLEAR = "USER_CLEAR";
export const STORES_RECEIVE = "STORES_RECEIVE";

export const orderPlus = (id) => ({
  type: ORDER_PLUS,
  id
});

export const orderMinus = (id) => ({
  type: ORDER_MINUS,
  id
});

export const orderSet = (id, count) => ({
  type: ORDER_SET,
  id,
  count
});

export const orderRemove = (id) => ({
  type: ORDER_REMOVE,
  id
});

export const orderClean = (products) => ({
  type: ORDER_CLEAN,
  products
});

export const orderClear = () => ({
  type: ORDER_CLEAR,
});

export const keywordSet = (keyword) => ({
  type: KEYWORD_SET,
  keyword
});

export const keywordClear = () => ({
  type: KEYWORD_CLEAR,
});

export const userSet = (field, value) => ({
  type: USER_SET,
  field,
  value
});

export const userClear = () => ({
  type: USER_CLEAR,
});

export const storesReceive = (stores) => ({
  type: STORES_RECEIVE,
  stores
});
