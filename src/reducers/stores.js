import {
  STORES_RECEIVE,
  STORE_RECEIVE,
} from '../actions';

const stores = (state = {}, action) => {
  switch (action.type) {
    case STORES_RECEIVE:
      return action.stores;
    case STORE_RECEIVE:
      return { ...state, [action.id]: action.store };
    default:
      return state;
  }
}

export default stores;
