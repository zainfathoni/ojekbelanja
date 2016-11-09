import React, { Component } from 'react';

import FilterInput from'../../../components/FilterInput';
import FilterCards from '../../../components/FilterCards';
import { tokos } from '../../../models';
import '../../pages.css';

export default class TokoPicker extends Component {
  constructor() {
    super();

    this.state = {
      keyword: ''
    }
  }

  /*** Methods ***/

  updateKeyword = (keyword) => {
    this.setState({
      keyword
    })
  }

  goToToko = (tokoId) => {
    console.log(`Going to ${tokoId}`);
    this.context.router.transitionTo(`/toko/${tokoId}`);
  }

  /*** Render ***/

  render() {
    return (
      <main className="l-wrapper-filter">
        <FilterInput
          placeholder="Cari Nama atau Area Layanan"
          keyword={this.state.keyword}
          action={this.updateKeyword}
          />
        <FilterCards
          keyword={this.state.keyword}
          items={tokos}
          titleField="name"
          descriptionField="area"
          imageField="image"
          action={this.goToToko}
          />
      </main>
    );
  }
}

TokoPicker.contextTypes = {
  router: React.PropTypes.object
}
