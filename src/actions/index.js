export const ORDER_PLUS = "ORDER_PLUS";
export const ORDER_MINUS = "ORDER_MINUS";
export const SET_COST = "SET_COST";

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

export const setCost = (cost) => {
  return {
    type: SET_COST,
    cost
  }
}
