import {
  ORDER_PLUS,
  ORDER_MINUS
} from "../actions";

const order = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ORDER_PLUS:
      newState = state;
      if (newState[action.id]) {
        newState[action.id]++;
      } else {
        newState[action.id] = 1;
      }
      return newState;
    case ORDER_MINUS:
      newState = state;
      if (newState[action.id] > 1) {
        newState[action.id]--;
      } else {
        delete newState[action.id];
      }
      return newState;
    default:
      return state;
  }
}

export default order;
