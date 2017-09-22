import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Home from "./Home";
import Toko from "./Toko";
import Pesan from "./Pesan";
import Login from "./Login";
import ThankYou from "./ThankYou";
import StyleGuide from "./StyleGuide";
import NotFound from "./NotFound";
import "../css/index.css";
import "../css/fonts.css";
import "../css/font-awesome.css";

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/toko/:storeId" component={Toko} />
            <Route path="/pesan/:storeId" component={Pesan} />
            <Route path="/thankyou/:storeId" component={ThankYou} />
            <Route path="/login" component={Login} />
            <Route path="/styleguide" component={StyleGuide} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Root;
