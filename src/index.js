import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import Home from './pages/Home';
import Toko from './pages/Toko';
import NotFound from './pages/NotFound';
import './css/index.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Home} />
        <Match pattern="/toko/:tokoId" component={Toko} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(
  <Root />,
  document.getElementById('root')
);
