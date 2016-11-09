import React, { Component } from 'react';

import FilterInput from '../../../components/FilterInput';
import FilterCards from '../../../components/FilterCards';
import { products, categories } from '../../../models';
import '../../pages.css';

export default class Products extends Component {
  constructor() {
    super();

    this.state = {
      products,
      keyword: ''
    }
  }

  /*** Methods ***/

  updateKeyword = (keyword) => {
    this.setState({
      keyword
    })
  }

  plus = (productId) => {
    console.log(`Adding 1 ${products[productId].unit} of ${products[productId].name} to Order`);
  }

  minus = (productId) => {
    console.log(`Removing 1 ${products[productId].unit} of ${products[productId].name} from Order`);
  }

  /*** Render ***/
  
  render() {
    return (
      <main className="l-wrapper-filter">
        <FilterInput
          placeholder="Cari Produk"
          keyword={this.state.keyword}
          action={this.updateKeyword}
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
          action={this.plus}
          actionReverse={this.minus}
          />
      </main>
    )
  }
}

Products.propTypes = {
  toko: React.PropTypes.object.isRequired
}
