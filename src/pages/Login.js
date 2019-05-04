import React from "react";

import Page from "../components/Page";
import Header from "../components/Header";
import LoginForm from "../containers/LoginForm";
import "./Login.css";

const Login = () => (
  <Page header={<Header heading={"Login / Register"} />}>
    <div className="l-Login">
      <LoginForm />
      {/*
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
            {isRegister && (
              <TextField
                name="name"
                label="Nama"
                placeholder="Nama Lengkap"
                value={user.name}
                onChange={this.updateUser}
                required
              />
            )}
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
        */}
    </div>
  </Page>
);

export default Login;
