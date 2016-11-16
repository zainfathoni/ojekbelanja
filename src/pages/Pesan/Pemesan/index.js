import React, { PropTypes as T } from 'react';

import Button from '../../../components/Button';
import TextField from '../../../components/TextField';
import { isEmailValid, isPhoneValid, isUserValid } from '../../../services/validation';
import '../../pages.css';
import './Pemesan.css';

export default function Pemesan(props) {
  const {
    user,
    onChange
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
        <TextField
          name="name"
          label="Nama"
          placeholder="Nama Lengkap"
          value={user.name}
          onChange={onChange}
          required
          />
        <TextField
          name="nickname"
          label="Panggilan"
          placeholder="Nama Panggilan"
          value={user.nickname}
          onChange={onChange}
          />
        <TextField
          type="email"
          name="email"
          label="Email"
          placeholder="Alamat Email"
          value={user.email}
          onChange={onChange}
          validate={isEmailValid}
          message="Alamat Email tidak valid"
          required
          />
        <TextField
          type="number"
          display="content"
          name="usia"
          label="Usia"
          placeholder="Usia Anda Saat Ini"
          value={user.usia}
          onChange={onChange}
          min={10}
          max={100}
          />
        <TextField
          type="tel"
          display="content"
          name="phone"
          label="No. Telepon"
          placeholder="081234567890"
          value={user.phone}
          onChange={onChange}
          validate={isPhoneValid}
          message="No. Telepon tidak valid"
          required
          />
      </div>
      <div className="pemesan-footer">
        <Button
          className="pemesan-footer-action"
          display="content"
          action={(e) => console.log('Lanjutkan')}
          icon="arrow-right"
          text="Lanjutkan"
          disabled={isUserValid(user)}
          />
      </div>

    </div>
  )
}

Pemesan.propTypes = {
  user: T.object.isRequired,
  onChange: T.func.isRequired
}
