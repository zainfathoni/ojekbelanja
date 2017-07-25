export const ORDER_PLUS = "ORDER_PLUS";
export const ORDER_MINUS = "ORDER_MINUS";
export const ORDER_SET = "ORDER_SET";
export const ORDER_CLEAR = "ORDER_CLEAR";
export const SET_COST = "SET_COST";
export const SET_KEYWORD = "SET_KEYWORD";

export const orderPlus = (id) => {
  return {
    type: ORDER_PLUS,
    id
  }
}

export const orderMinus = (id) => {
  return {
    type: ORDER_MINUS,
    id
  }
}

export const orderSet = (order) => {
  return {
    type: ORDER_SET,
    order
  }
}

export const orderClear = () => {
  return {
    type: ORDER_CLEAR,
  }
}

export const setCost = (cost) => {
  return {
    type: SET_COST,
    cost
  }
}

export const setKeyword = (keyword) => {
  return {
    type: SET_KEYWORD,
    keyword
  }
}
