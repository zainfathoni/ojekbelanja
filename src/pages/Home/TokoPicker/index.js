import React, { Component } from 'react';

import FilterInput from'../../../components/FilterInput';
import FilterCards from '../../../components/FilterCards';
import { tokos } from '../../../models';
import '../../pages.css';

export default class TokoPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      tempKeyword: ''
    }
  }

  /*** Methods ***/

  updateKeyword = (keyword) => {
    this.setState({
      keyword
    })
  }

  updateTempKeyword = (tempKeyword) => {
    this.setState({
      tempKeyword
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
          tempKeyword={this.state.tempKeyword}
          updateTempKeyword={this.updateTempKeyword}
          withButton
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
