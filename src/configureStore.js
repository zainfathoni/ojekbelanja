import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { loadState, saveState } from './services/localStorage'; 
import throttle from 'lodash/throttle'; 

import ojekBelanja from "./reducers";

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    ojekBelanja,
    loadState(),
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  store.subscribe(
    throttle(() => {
      const { order, user } = store.getState();
      saveState({
        order,
        user,
      })
    }, 1000)
  );

  return store;
};

export default configureStore;
