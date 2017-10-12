import React, { Component } from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../../actions";
import {} from "../../reducers";
import FormFields from "../FormFields";
import Button from "../Button";

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegister: false
    };
  }

  toggleRegister = () => {
    this.setState({
      isRegister: !this.state.isRegister
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.onSubmit();
  };

  render() {
    const { uid, isInvalid, onChange, onSubmit } = this.props;
    const { isRegister } = this.state;
    let fields = {
      email: {
        component: "TextField",
        type: "email",
        display: "fullwidth",
        name: "email",
        label: "Email",
        placeholder: "Alamat Email",
        value: this.props.fields.email.value,
        required: this.props.fields.email.required,
        message: this.props.fields.email.message
      },
      password: {
        component: "TextField",
        type: "password",
        display: "fullwidth",
        name: "password",
        label: "Password",
        placeholder: "Minimal 6 karakter",
        value: this.props.fields.password.value,
        required: this.props.fields.password.required,
        message: this.props.fields.password.message
      }
    };

    if (isRegister) {
      fields = {
        name: {
          component: "TextField",
          display: "fullwidth",
          name: "name",
          label: "Nama",
          placeholder: "Nama Lengkap",
          value: this.props.fields.name.value,
          required: this.props.fields.name.required,
          message: this.props.fields.name.message
        },
        ...fields
      };
    }

    return (
      <FormFields
        name="login"
        title={isRegister ? "Register" : "Login"}
        icon={isRegister ? "user-plus" : "sign-in"}
        header={
          <Button
            className="Login-heading-action"
            display="content"
            action={() => this.toggleRegister()}
            icon={isRegister ? "sign-in" : "user-plus"}
            text={isRegister ? "Login" : "Register"}
            isSecondary
            isSmall
            disabled={uid !== null}
          />
        }
        footer={
          <Button
            display="fullwidth"
            type="submit"
            action={e => this.submit(e)}
            icon={uid ? "sign-out" : isRegister ? "user-plus" : "sign-in"}
            text={uid ? "Logout" : isRegister ? "Register" : "Login"}
            title={
              isInvalid ? "Masih ditemukan data yang tidak valid" : "Login"
            }
            disabled={!uid && isInvalid}
            isSecondary={uid !== null}
          />
        }
        fields={fields}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );
  }
}

AuthForm.propTypes = {
  uid: T.number,
  fields: T.objectOf(
    T.shape({
      value: T.string,
      required: T.bool,
      message: T.any
    })
  ),
  isInvalid: T.bool.isRequired,
  onChange: T.func.isRequired,
  onSubmit: T.func.isRequired
};
