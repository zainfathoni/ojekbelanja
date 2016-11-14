import React, { PropTypes as T } from 'react';

import '../../pages.css';
import './Pemesan.css';

export default function Pemesan(props) {
  const {
    nama
  } = props;

  return (
    <div className="pemesan">
      <div className="pemesan-heading">
        <div className="pemesan-heading-title">
          <i className="fa fa-lg fa-address-card" aria-hidden="true"></i>
          {" Data Pemesan"}
        </div>
      </div>
      <div className="pemesan-body">
        {nama}
      </div>
      <div className="pemesan-footer">
      </div>
        
    </div>
  )
}

Pemesan.propTypes = {
  nama: T.string.required
}
