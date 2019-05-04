import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import {
  isValid,
  isUserValid,
  isRequired,
  isRequirementFulfilled,
  areRequirementsFulfilled
} from "../reducers";
import FormFields from "../components/FormFields";
import FormFooterButtons from "../components/FormFooterButtons";

let PemesanForm = ({
  name,
  storeId,
  user,
  fields,
  isInvalid,
  setUser,
  clearUser
}) => (
  <FormFields
    name={name}
    title="Data Pemesan"
    icon="address-card"
    footer={
      <FormFooterButtons
        buttons={{
          reset: {
            action: () => {
              clearUser();
            },
            icon: "times",
            text: "Bersihkan",
            title: !Object.keys(user).length
              ? "Data sudah bersih"
              : "Bersihkan data",
            disabled: !Object.keys(user).length
          },
          submit: {
            link: `/thankyou/${storeId}`,
            icon: "cart-arrow-down",
            text: "Selesai",
            title: "Konfirmasi pemesanan",
            disabled: isInvalid
          }
        }}
      />
    }
    fields={fields}
    onChange={(field, value) => {
      setUser(field, value);
    }}
    onSubmit={e => {
      e.preventDefault();
    }}
  />
);

PemesanForm.propTypes = {
  name: T.string.isRequired,
  user: T.object.isRequired,
  storeId: T.string.isRequired,
  fields: T.objectOf(
    T.shape({
      component: T.oneOf(["TextField", "TextArea"]),
      type: T.oneOf(["email", "password", "tel"]),
      display: T.string,
      label: T.string,
      placeholder: T.string,
      value: T.string,
      rows: T.int,
      message: T.any,
      required: T.bool
    })
  ),
  isInvalid: T.bool.isRequired,
  setUser: T.func.isRequired,
  clearUser: T.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  fields: Object.keys(ownProps.fields)
    .map(key => {
      const f = ownProps.fields[key];
      return {
        ...f,
        name: key,
        value: state.user[key],
        required: isRequired(key),
        message:
          (!isRequirementFulfilled(state, key) && `${f.label} harus diisi`) ||
          (!isValid(state, key) && `${f.label} tidak valid`)
      };
    })
    .reduce(
      (res, f) => ({
        ...res,
        [f.name]: f
      }),
      {}
    ),
  isInvalid: !areRequirementsFulfilled(state) || !isUserValid(state)
});

PemesanForm = connect(mapStateToProps, actions)(PemesanForm);

export default PemesanForm;
