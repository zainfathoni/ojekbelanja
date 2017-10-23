import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import { isValid, isRequired, isRequirementFulfilled } from "../reducers";
import AuthForm from "../components/AuthForm";

let LoginForm = ({ uid, fields, isInvalid, setUser, loginUser }) => (
  <AuthForm
    uid={uid}
    fields={fields}
    isInvalid={isInvalid}
    isPasswordValid={value => /^.{6,}$/.test(value)}
    onChange={(field, value) => {
      setUser(field, value);
    }}
    onSubmit={loginUser}
  />
);

LoginForm.propTypes = {
  uid: T.number,
  fields: T.objectOf(
    T.shape({
      value: T.string,
      required: T.bool,
      message: T.any
    })
  )
};

const mapStateToProps = (state, ownProps) => ({
  uid: null,
  fields: {
    name: {
      value: state.user.name,
      required: isRequired("name"),
      message:
        (!isRequirementFulfilled(state, "name") && `Nama harus diisi`) ||
        (!isValid(state, "name") && `Nama tidak valid`)
    },
    email: {
      value: state.user.email,
      required: isRequired("email"),
      message:
        (!isRequirementFulfilled(state, "email") && `Email harus diisi`) ||
        (!isValid(state, "email") && `Email tidak valid`)
    }
  },
  isInvalid: !isValid(state, "email")
});

LoginForm = connect(mapStateToProps, actions)(LoginForm);

export default LoginForm;
