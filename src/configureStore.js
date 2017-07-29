import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import ojekBelanja from "./reducers";

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    ojekBelanja,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
};

export default configureStore;
