import {
  ORDER_PLUS,
  ORDER_MINUS
} from "../actions";

const order = (state = {}, action) => {
  const { id } = action
  const count = state[action.id];
  switch (action.type) {
    case ORDER_PLUS:
      if (count) {
        return { ...state, [id]: count + 1 };
      } else {
        return { ...state, [id]: 1 };
      }
    case ORDER_MINUS:
      if (count > 1) {
        return { ...state, [id]: count - 1 };
      } else {
        var newState = Object.assign({}, state);
        delete newState[id];
        return newState; 
      }
    default:
      return state;
  }
}

export default order;
