import React, { Component } from 'react';

import FilterInput from'../../../components/FilterInput';
import FilterCards from '../../../components/FilterCards';
import base from '../../../services/base';
import '../../pages.css';

export default class TokoPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: {},
      keyword: '',
      tempKeyword: ''
    }
  }

  /*** Lifecycle ***/

  componentWillMount() {
    // Fetch stores from Firebase
    base
      .fetch(`/stores`, {
        context: this
      })
      .then(data => {
        this.setState({
          stores: data
        })
      })
      .catch(error => {
        console.log(error);
      });
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
      <main className="l-main">
        <FilterInput
          placeholder="Cari Nama atau Area Layanan"
          keyword={this.state.keyword}
          action={this.updateKeyword}
          tempKeyword={this.state.tempKeyword}
          actionTemp={this.updateTempKeyword}
          />
        <FilterCards
          keyword={this.state.keyword}
          items={this.state.stores}
          fields={{
            title: 'name',
            description: 'area',
            image: 'image',
          }}
          action={this.goToToko}
          />
      </main>
    );
  }
}

TokoPicker.contextTypes = {
  router: React.PropTypes.object
}
