import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import ojekBelanja from "./reducers";

const configureStore = () => {
  const middlewares = [createLogger()];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    ojekBelanja,
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );
};

export default configureStore;
