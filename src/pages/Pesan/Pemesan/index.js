import React, { PropTypes as T } from 'react';

import Button from '../../../components/Button';
import '../../pages.css';
import './Pemesan.css';

export default function Pemesan(props) {
  const {
    name
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
        <div className="TextField">
          <label className="TextField-label" htmlFor="name">Nama</label>
          <input className="TextField-input" id="name" name="name" type="text" defaultValue={name} placeholder="Nama Lengkap" required/>
          <span className="TextField-message">* Nama harus diisi</span>
        </div>
        <div className="TextField">
          <label className="TextField-label" htmlFor="nickname">Panggilan<span className="TextField-label-span"> - Opsional</span></label>
          <input className="TextField-input" id="nickname" name="nickname" type="text" defaultValue={name} placeholder="Nama Panggilan" required/>
        </div>
        <div className="TextField">
          <label className="TextField-label" htmlFor="email">Email</label>
          <input className="TextField-input error" id="email" name="email"type="email" defaultValue={name} placeholder="Alamat Email" required/>
          <span className="TextField-message">* Email harus diisi</span>
        </div>
      </div>
      <div className="pemesan-footer">
        <Button
          className="pemesan-footer-action"
          display="content"
          action={(e) => console.log('Lanjutkan')}
          icon="arrow-right"
          text="Lanjutkan"
          />
      </div>
        
    </div>
  )
}

Pemesan.propTypes = {
  name: T.string.isRequired
}
