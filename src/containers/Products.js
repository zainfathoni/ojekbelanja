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
        <ProductInput
          placeholder="Cari Produk"
          withButton
          />
        <ProductCards
          items={products}
          sections={categories}
          fields={{
            title: 'name',
            description: 'desc',
            section: 'category',
          }}
          />
      </div>
    )
  }
}

Products.propTypes = {
  order: T.objectOf(T.number).isRequired,
  clearKeyword: T.func.isRequired
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
