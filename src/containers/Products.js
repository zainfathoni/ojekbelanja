import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';
import ProductInput from './ProductInput';
import ProductCards from './ProductCards';
import { products, categories } from '../models';

class Products extends Component {
  /*** Lifecycle ***/

  componentWillUnmount() {
    this.props.keywordClear();
  }

  /*** Render ***/
  
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

Products.propTypes = {
  keywordClear: T.func.isRequired,
}

Products = connect(
  null,
  actions,
)(Products);

export default Products;
