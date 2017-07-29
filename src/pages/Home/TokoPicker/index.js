import React, { Component } from 'react';

import FilterInput from'../../../components/FilterInput';
import FilterCards from '../../../components/FilterCards';
import base from '../../../services/base';
import '../../pages.css';

class TokoPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: {},
      keyword: '',
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

  /*** Render ***/

  render() {
    return (
      <main className="l-main">
        <FilterInput
          placeholder="Cari Nama atau Area Layanan"
          keyword={this.state.keyword}
          action={this.updateKeyword}
          />
        <FilterCards
          keyword={this.state.keyword}
          items={this.state.stores}
          fields={{
            title: 'name',
            description: 'area',
          }}
          />
      </main>
    );
  }
}

export default TokoPicker;
