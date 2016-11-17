import React, { Component } from 'react';
import { tokos } from '../../models';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import '../pages.css';

export default class NotFound extends Component {
  render() {
    const tokoId = this.props.params.tokoId;

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={"Terima kasih telah berbelanja di Toko " + tokos[tokoId].name} />
        
      </div>
    );
  }
}
