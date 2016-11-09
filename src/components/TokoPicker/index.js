import React, { Component } from 'react';

import FilterInput from'../FilterInput';
import FilterCards from '../FilterCards';
import { tokos } from '../../models';
import './TokoPicker.css';

export default class TokoPicker extends Component {
  constructor() {
    super();

    this.state = {
      tokos,
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
      <main className="l-tokopicker">
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
          items={this.state.tokos}
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
