import React from 'react';

import Page from '../components/Page';
import Tokos from '../containers/Tokos';

const Home = () => (
  <Page>
    <div>
      <p>
        Pilih Toko <strong>Ojek Belanja</strong> Anda
      </p>
      <Tokos />
    </div>
  </Page>
);

export default Home;
