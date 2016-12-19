import React, { Component } from 'react';

import MainNav from '../../components/MainNav';
import Header from '../../components/Header';
import Form from '../../components/Form';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { update, set, isEmailValid, isPasswordValid } from '../../services/form';
import '../pages.css';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      isRegister: false,
    }
  }

  /*** Methods ***/

  updateUser = (field, value) => {
    update(this, 'user', field, value)
  }

  isFormInvalid = (user, isRegister) => {
    return (isRegister && !user.name) ||
      !user.email || !isEmailValid(user.email) ||
      !user.password || !isPasswordValid(user.password)
  }

  toggleRegister = () => {
    set(this, 'isRegister', !this.state.isRegister);
  }

  submit = (e, user) => {
    e.preventDefault()
    if (this.state.isRegister) {
      console.log(`Register ${JSON.stringify(user)}`);
    } else {
      console.log(`Login ${JSON.stringify(user)}`);
    }
  }

  /*** Render ***/

  render() {
    const {
      user,
      isRegister,
    } = this.state;

    const isInvalid = this.isFormInvalid(user, isRegister);

    return (
      <div className="l-fullwidth">
        <div className="l-wrapper-MainNav">
          <MainNav />
        </div>
        <Header heading={'Login/Register'} />
        <main className="l-Login">
          <Form
            name="Login"
            title={isRegister ? "Register" : "Login"}
            onSubmit={(e) => this.submit(e, user)}
            header={
              <Button
                className="Login-heading-action"
                display="content"
                action={(e) => this.toggleRegister()}
                icon={isRegister ? "sign-in" : "user-plus"}
                text={isRegister ? "Login" : "Register"}
                isSecondary
                isSmall
                />
            }
            footer={
              <div>
                <Button
                  className="Login-footer-login"
                  type="submit"
                  display="fullwidth"
                  action={(e) => this.submit(e, user)}
                  icon={isRegister ? "user-plus" : "sign-in"}
                  text={isRegister ? "Register" : "Login"}
                  disabled={isInvalid}
                  title={isInvalid ? "Masih ditemukan data yang tidak valid" : "Login"}
                  />
              </div>
            }
            >
            {isRegister &&
              <TextField
                name="name"
                label="Nama"
                placeholder="Nama Lengkap"
                value={user.name}
                onChange={this.updateUser}
                required
                />
            }
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
