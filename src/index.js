import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import Home from './pages/Home';
import Toko from './pages/Toko';
import Pesan from './pages/Pesan';
import Login from './pages/Login';
import ThankYou from './pages/ThankYou';
import StyleGuide from './pages/StyleGuide';
import NotFound from './pages/NotFound';
import './css/index.css';
import './css/fonts.css';
import './css/font-awesome.css';

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
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
  )
}

render(
  <Root />,
  document.getElementById('root')
);
