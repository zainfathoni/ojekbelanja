import React, { Component } from 'react';
import { PropTypes as T } from 'prop-types';
import { connect } from 'react-redux';

import { getCategories, getProducts } from '../reducers';
import ProductInput from './ProductInput';
import ProductCards from './ProductCards';

class Products extends Component {
  render() {
    return (
      <div>
        <ProductInput />
        <ProductCards
          items={this.props.products}
          sections={this.props.categories}
        />
      </div>
    )
  }
}

Products.propTypes = {
  categories: T.objectOf(T.string),
  products: T.objectOf(
      T.shape({
        name: T.string.isRequired,
        desc: T.string.isRequired,
        image: T.string.isRequired,
        unit: T.string.isRequired,
        step: T.number.isRequired,
        price: T.number.isRequired,
        category: T.string.isRequired,
      }).isRequired,
    ).isRequired,
}

const mapStateToProps = (state) => ({
  categories: getCategories(state),
  products: getProducts(state),
});

Products = connect(
  mapStateToProps,
)(Products);

export default Products;
