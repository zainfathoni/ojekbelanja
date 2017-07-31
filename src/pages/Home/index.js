import React, { Component } from 'react';

import Page from '../../components/Page';
import Tokos from '../../containers/Tokos';
import '../pages.css';

export default class Home extends Component {
  render() {
    return (
      <Page>
        <div>
          <p>
            Pilih Toko <strong>Ojek Belanja</strong> Anda
          </p>
          <Tokos />
        </div>
      </Page>
    );
  }
}
