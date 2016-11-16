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
          titleField="name"
          descriptionField="desc"
          sectionField="category"
          imageField="image"
          action={this.props.action}
          actionReverse={this.props.actionReverse}
          collection={this.props.order}
          />
      </div>
    )
  }
}

Products.propTypes = {
  toko: T.object.isRequired,
  order: T.object.isRequired,
  action: T.func.isRequired,
  actionReverse: T.func.isRequired,
}
