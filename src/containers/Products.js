import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from "react-redux";

import { keywordClear } from "../actions";
import ProductInput from './ProductInput';
import ProductCards from './ProductCards';
import { products, categories } from '../models';

class Products extends Component {
  /*** Lifecycle ***/

  componentWillUnmount() {
    this.props.clear();
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
  order: T.objectOf(T.number).isRequired,
  clear: T.func.isRequired,
}

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

Products = connect(
  mapStateToProps,
  {
    clear: keywordClear,
  },
)(Products);

export default Products;
