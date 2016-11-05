import React, { Component } from 'react';

import Filter from'./Filter';
import TokoList from './TokoList';
import { tokos } from './models';

export default class TokoPicker extends Component {
  constructor() {
    super();

    this.state = {
      tokos,
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
      <main>
        <Filter
          keyword={this.state.keyword}
          action={this.updateKeyword}
          />
        <TokoList
          {...this.state}
          goToToko={this.goToToko}
          />
      </main>
    );
  }
}

TokoPicker.contextTypes = {
  router: React.PropTypes.object
}
