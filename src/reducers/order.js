import {
  ORDER_PLUS,
  ORDER_MINUS
} from "../actions";

const order = (state = {}, action) => {
  const count = state[action.id];
  switch (action.type) {
    case ORDER_PLUS:
      if (count) {
        return { ...state, [action.id]: count + 1 };
      } else {
        return { ...state, [action.id]: 1 };
      }
    case ORDER_MINUS:
      if (count > 1) {
        return { ...state, [action.id]: count - 1 };
      } else {
        let { [action.id]: deleted, ...newState } = state;
        return newState;
      }
    default:
      return state;
  }
}

export default order;
