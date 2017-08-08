import React, { Component } from "react";

import base from "../services/base";
import Page from "../components/Page";
import Header from "../components/Header";
import Form from "../components/Form";
import TextField from "../components/TextField";
import Button from "../components/Button";
import { update, set, isEmailValid, isPasswordValid } from "../services/form";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uid: null,
      user: {},
      isRegister: false
    };
  }

  /*** Lifecycle ***/

  componentDidMount() {
    base.onAuth(user => {
      if (user) {
        this.authHandler(null, { user });
      }
    });
  }

  /*** Methods ***/

  updateUser = (field, value) => {
    update(this, "user", field, value);
  };

  isFormInvalid = (user, isRegister) => {
    return (
      (isRegister && !user.name) ||
      !user.email ||
      !isEmailValid(user.email) ||
      !user.password ||
      !isPasswordValid(user.password)
    );
  };

  toggleRegister = () => {
    set(this, "isRegister", !this.state.isRegister);
  };

  submit = (e, user) => {
    e.preventDefault();
    if (this.state.uid) {
      base.unauth();
      set(this, "uid", null);
    } else if (this.state.isRegister) {
      console.log(`Register ${JSON.stringify(user)}`);
      base.createUser(
        {
          email: user.email,
          password: user.password
        },
        this.authHandler
      );
    } else {
      console.log(`Login ${JSON.stringify(user)}`);
      base.authWithPassword(
        {
          email: user.email,
          password: user.password
        },
        this.authHandler
      );
    }
  };

  authHandler = (err, authData) => {
    // FIXME: Double invocation of authHandler upon Login
    console.log(authData);
    if (err) {
      console.error(err);
      return;
    }

    set(this, "uid", authData.user.uid);
  };

  /*** Render ***/

  render() {
    const { uid, user, isRegister } = this.state;

    const isInvalid = this.isFormInvalid(user, isRegister);

    return (
      <Page header={<Header heading={"Login / Register"} />}>
        <div className="l-Login">
          <Form
            name="Login"
            title={isRegister ? "Register" : "Login"}
            onSubmit={e => this.submit(e, user)}
            header={
              <Button
                className="Login-heading-action"
                display="content"
                action={e => this.toggleRegister()}
                icon={isRegister ? "sign-in" : "user-plus"}
                text={isRegister ? "Login" : "Register"}
                isSecondary
                isSmall
                disabled={uid !== null}
              />
            }
            footer={
              <Button
                className="Login-footer-login"
                type="submit"
                display="fullwidth"
                action={e => this.submit(e, user)}
                icon={uid ? "sign-out" : isRegister ? "user-plus" : "sign-in"}
                text={uid ? "Logout" : isRegister ? "Register" : "Login"}
                disabled={!uid && isInvalid}
                title={
                  isInvalid ? "Masih ditemukan data yang tidak valid" : "Login"
                }
                isSecondary={uid !== null}
              />
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
              />}
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
        </div>
      </Page>
    );
  }
}
