import React from 'react';

import Page from '../components/Page';
import Brand from '../components/Brand';
import Tokos from '../containers/Tokos';

const Home = () => (
  <Page>
    <div>
      <p>
        Pilih Toko <Brand /> Anda
      </p>
      <Tokos />
    </div>
  </Page>
);

export default Home;
