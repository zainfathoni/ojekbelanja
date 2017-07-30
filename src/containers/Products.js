import React, { Component } from 'react';

import ProductInput from './ProductInput';
import ProductCards from './ProductCards';
import { products, categories } from '../models';

class Products extends Component {
  render() {
    return (
      <div>
        <ProductInput />
        <ProductCards
          items={products}
          sections={categories}
        />
      </div>
    )
  }
}

export default Products;
