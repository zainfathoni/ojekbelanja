import {
  STORES_RECEIVE
} from "../actions";

const stores = (state = {}, action) => {
  switch (action.type) {
    case STORES_RECEIVE:
      return action.stores;
    default:
      return state;
  }
}

export default stores;
