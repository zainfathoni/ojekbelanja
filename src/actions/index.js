export const ORDER_PLUS = "ORDER_PLUS";
export const ORDER_MINUS = "ORDER_MINUS";
export const ORDER_SET = "ORDER_SET";
export const ORDER_REMOVE = "ORDER_REMOVE";
export const ORDER_LOAD = "ORDER_LOAD";
export const ORDER_CLEAR = "ORDER_CLEAR";
export const KEYWORD_SET = "KEYWORD_SET";
export const KEYWORD_CLEAR = "KEYWORD_CLEAR";
export const USER_SET = "USER_SET";
export const USER_LOAD = "USER_LOAD";
export const USER_CLEAR = "USER_CLEAR";

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

export const orderSet = (id, count) => {
  return {
    type: ORDER_SET,
    id,
    count
  }
}

export const orderRemove = (id) => {
  return {
    type: ORDER_REMOVE,
    id
  }
}

export const orderLoad = (order) => {
  return {
    type: ORDER_LOAD,
    order
  }
}

export const orderClear = () => {
  return {
    type: ORDER_CLEAR,
  }
}

export const keywordSet = (keyword) => {
  return {
    type: KEYWORD_SET,
    keyword
  }
}

export const keywordClear = () => {
  return {
    type: KEYWORD_CLEAR,
  }
}

export const userSet = (field, value) => {
  return {
    type: USER_SET,
    field,
    value
  }
}

export const userLoad = (user) => {
  return {
    type: USER_LOAD,
    user
  }
}

export const userClear = () => {
  return {
    type: USER_CLEAR,
  }
}
