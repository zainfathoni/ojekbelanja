import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from "react-redux";
import { keywordClear } from "../actions";

import ProductInput from './ProductInput';
import ProductCards from './/ProductCards';
import { products, categories } from '../models';

class Products extends Component {
  /*** Lifecycle ***/

  componentWillUnmount() {
    this.props.clearKeyword();
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
  clearKeyword: T.func.isRequired,
}

const mapStateToProps = (state, ownProps) => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    clearKeyword: () => {
      dispatch(keywordClear());
    }
  };
};

Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default Products;
