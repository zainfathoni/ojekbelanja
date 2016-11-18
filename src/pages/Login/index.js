import React from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Form from '../../components/Form';
import TextField from '../../components/TextField';
import '../pages.css';
import './Login.css';

export default function Login(props) {
  return (
    <div className="l-fullwidth">
      <div className="l-wrapper-MainNav">
        <MainNav />
      </div>
      <Header heading={'Login/Register'} />
      <main className="l-Login">
        <Form
          title="Login / Register"
          icon={<i className="fa fa-lg fa-sign-in" aria-hidden="true"></i>}
          >
          <TextField
            name="name"
            label="Nama"
            placeholder="Nama Lengkap"
            value="user"
            onChange={() => true}
            required
            />
        </Form>
      </main>
    </div>
  )
}
