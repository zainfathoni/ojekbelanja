import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Home from './pages/Home';
import Toko from './pages/Toko';
import Pesan from './pages/Pesan';
import Login from './pages/Login';
import ThankYou from './pages/ThankYou';
import StyleGuide from './pages/StyleGuide';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Category from './pages/Category';
import './css/index.css';
import './css/fonts.css';
import './css/font-awesome.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/toko/:tokoId" component={Toko} />
        <Match pattern="/pesan/:tokoId" component={Pesan} />
        <Match pattern="/thankyou/:tokoId" component={ThankYou} />
        <Match pattern="/login" component={Login} />
        <Match pattern="/product" component={Product} />
        <Match pattern="/category" component={Category} />
        <Match pattern="/styleguide" component={StyleGuide} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
