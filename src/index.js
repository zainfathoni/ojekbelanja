import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

import App from './App';
import Toko from './Toko';
import NotFound from './NotFound';
import './css/index.css';
import './css/fonts.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
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
