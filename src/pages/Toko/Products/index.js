import React, { Component, PropTypes as T } from 'react';
import { connect } from "react-redux";
import { setKeyword } from "../../../actions";

import ProductInput from '../../../containers/ProductInput';
import ProductCards from '../../../containers/ProductCards';
import { products, categories } from '../../../models';
import '../../pages.css';

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products,
      tempKeyword: '',
    }
  }

  componentWillUnmount() {
    this.props.clearKeyword();
  }

  /*** Methods ***/

  actionTemp = (tempKeyword) => {
    this.setState({
      tempKeyword,
    })
  }

  /*** Render ***/
  
  render() {
    return (
      <div>
        <ProductInput
          placeholder="Cari Produk"
          tempKeyword={this.state.tempKeyword}
          actionTemp={this.actionTemp}
          withButton
          />
        <ProductCards
          items={this.state.products}
          sections={categories}
          fields={{
            title: 'name',
            description: 'desc',
            image: 'image',
            ribbon: 'promo',
            tooltip: 'promo_desc',
            section: 'category',
            disabled: 'empty'
          }}
          />
      </div>
    )
  }
}

Products.propTypes = {
  toko: T.shape({
    name: T.string.isRequired,
    phone: T.string.isRequired,
    area: T.string.isRequired,
    image: T.string.isRequired,
    cost: T.number.isRequired,
  }).isRequired,
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
      dispatch(setKeyword(""));
    }
  };
};

Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default Products;
