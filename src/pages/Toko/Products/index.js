import React, { Component, PropTypes as T } from 'react';

import FilterInput from '../../../components/FilterInput';
import FilterCards from '../../../components/FilterCards';
import { products, categories } from '../../../models';
import '../../pages.css';

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products,
      keyword: '',
      tempKeyword: '',
    }
  }

  /*** Methods ***/

  updateKeyword = (keyword) => {
    this.setState({
      keyword,
    })
  }

  actionTemp = (tempKeyword) => {
    this.setState({
      tempKeyword,
    })
  }

  /*** Render ***/
  
  render() {
    return (
      <div>
        <FilterInput
          placeholder="Cari Produk"
          keyword={this.state.keyword}
          tempKeyword={this.state.tempKeyword}
          action={this.updateKeyword}
          actionTemp={this.actionTemp}
          withButton
          />
        <FilterCards
          keyword={this.state.keyword}
          items={this.state.products}
          sections={categories}
          fields={{
            title: 'name',
            description: 'desc',
            image: 'image',
            section: 'category',
          }}
          action={this.props.action}
          actionReverse={this.props.actionReverse}
          collection={this.props.order}
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
  action: T.func.isRequired,
  actionReverse: T.func.isRequired,
}
