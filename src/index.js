import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import { Provider } from "react-redux";

import configureStore from "./configureStore";
import { save } from './services/form';
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

store.subscribe(() => {
  // Save 'order' to Local Storage
  // TODO Save order for each Store separately
  save(`order`, store.getState().order);
});

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/toko/:storeId" component={Toko} />
          <Match pattern="/pesan/:storeId" component={Pesan} />
          <Match pattern="/thankyou/:storeId" component={ThankYou} />
          <Match pattern="/login" component={Login} />
          <Match pattern="/styleguide" component={StyleGuide} />
          <Miss component={NotFound} />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
