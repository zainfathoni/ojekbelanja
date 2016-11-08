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
      search: ''
    }
  }

  handleSearchChange = (search) => {
    this.setState({search: search})
  }

    handleClick = (click) => {
      this.setState({keyword:this.state.search,search:''})
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
      <main className="l-tokopicker">
        <FilterInput
          placeholder="Cari Nama atau Area Layanan"
          keyword={this.state.keyword}
          action={this.updateKeyword}
          click={this.handleClick}
          search={this.handleSearchChange}
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
