import React from "react";
import { PropTypes as T } from "prop-types";
import { connect } from "react-redux";

import * as actions from "../actions";
import FormFields from "../components/FormFields";
import FormFooterButtons from "../components/FormFooterButtons";

let PemesanForm = ({ name, user, storeId, setUser, clearUser }) => {
  return (
    <FormFields
      name={name}
      title="Data Pemesan"
      icon="address-card"
      footer={
        <FormFooterButtons
          buttons={{
            reset: {
              action: () => {},
              icon: "times",
              text: "Bersihkan",
              title: "Bersihkan data",
              disabled: false
            },
            submit: {
              link: "/thankyou/jejen",
              icon: "cart-arrow-down",
              text: "Selesai",
              title: "Konfirmasi pemesanan",
              disabled: false
            }
          }}
        />
      }
      fields={{
        email: {
          component: "TextField",
          type: "email",
          label: "Email",
          placeholder: "Alamat Email",
          value: "",
          message: "Alamat Email tidak valid",
          required: true
        },
        address: {
          component: "TextArea",
          label: "Alamat",
          placeholder: "Alamat Lengkap",
          value: "",
          rows: 4,
          required: true
        }
      }}
      onChange={() => {}}
      onSubmit={() => {}}
    />
  );
};

PemesanForm.propTypes = {
  name: T.string.isRequired,
  user: T.object.isRequired,
  storeId: T.string.isRequired,
  setUser: T.func.isRequired,
  clearUser: T.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});

PemesanForm = connect(mapStateToProps, actions)(PemesanForm);

export default PemesanForm;
