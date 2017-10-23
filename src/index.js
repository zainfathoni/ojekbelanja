import React from "react";
import { render } from "react-dom";

import firebase from "./services/firebase";
import Root from "./pages/Root";
import configureStore from "./configureStore";
import * as actions from "./actions";
const store = configureStore();

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    actions.loginSuccess(user);
  } else {
    store.dispatch(actions.logoutSuccess());
  }
});

render(<Root store={store} />, document.getElementById("root"));
