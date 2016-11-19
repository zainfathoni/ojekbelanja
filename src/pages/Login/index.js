import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Form from '../../components/Form';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { update, isEmailValid, isPasswordValid } from '../../services/validation';
import '../pages.css';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }

  /*** Methods ***/

  updateUser = (field, value) => {
    update(this, 'user', field, value)
  }

  isFormInvalid = (user) => {
    return !user.name ||
      !user.email || !isEmailValid(user.email) ||
      !user.password || !isPasswordValid(user.password)
  }

  register = (e, user) => {
    e.preventDefault()
    console.log(`Register ${JSON.stringify(user)}`);
  }

  login = (e, user) => {
    e.preventDefault()
    console.log(`Login ${JSON.stringify(user)}`);
  }

  /*** Render ***/

  render() {
    const {
      user
    } = this.state;

    const isInvalid = this.isFormInvalid(user);

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
            onSubmit={(e) => this.login(e, user)}
            footer={
              <div>
                <Button
                  className="Login-footer-register"
                  display="content"
                  action={(e) => this.register(e, user)}
                  icon="user-plus"
                  text="Register"
                  disabled={isInvalid}
                  title={isInvalid ? "Masih ditemukan data yang tidak valid" : "Register"}
                  isSecondary
                  />
                <Button
                  className="Login-footer-login"
                  type="submit"
                  display="content"
                  action={(e) => this.login(e, user)}
                  icon="sign-in"
                  text="Login"
                  disabled={isInvalid}
                  title={isInvalid ? "Masih ditemukan data yang tidak valid" : "Login"}
                  />
              </div>
            }
            >
            <TextField
              name="name"
              label="Nama"
              placeholder="Nama Lengkap"
              value={user.name}
              onChange={this.updateUser}
              required
              />
            <TextField
              type="email"
              name="email"
              label="Email"
              placeholder="Alamat Email"
              value={user.email}
              onChange={this.updateUser}
              validate={isEmailValid}
              message="Alamat Email tidak valid"
              required
              />
            <TextField
              type="password"
              name="password"
              label="Password"
              placeholder="Minimal 6 karakter"
              value={user.password}
              onChange={this.updateUser}
              validate={isPasswordValid}
              message="Password minimal 6 karakter"
              required
              />
          </Form>
        </main>
      </div>
    )
  }
}
