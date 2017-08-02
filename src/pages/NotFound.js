import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../components/Page';
import Header from '../components/Header';

const NotFound = () => (
  <Page
    header={<Header is404={true} />}
  >
    <div>
      <p>
        Maaf, halaman yang Anda tuju tidak ditemukan.
      </p>
      <p>
        Silakan kembali ke <Link to="/">halaman utama</Link>.
      </p>
    </div>
  </Page>
);

export default NotFound;
