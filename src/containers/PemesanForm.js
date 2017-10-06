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
}) => {
  return (
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
};

PemesanForm.propTypes = {
  name: T.string.isRequired,
  user: T.object.isRequired,
  storeId: T.string.isRequired,
  fields: T.objectOf(
    T.shape({
      component: T.oneOf(["TextField", "TextArea"]),
      type: T.oneOf(["email", "password"]),
      display: T.string,
      label: T.string,
      placeholder: T.string,
      value: T.string,
      rows: T.int,
      validate: T.func,
      message: T.any,
      required: T.bool
    })
  ),
  isInvalid: T.bool.required,
  setUser: T.func.isRequired,
  clearUser: T.func.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  fields: {
    name: {
      component: "TextField",
      label: "Nama",
      placeholder: "Nama Lengkap",
      value: state.user.name,
      required: isRequired("name"),
      message: !isRequirementFulfilled(state, "name") && "Nama harus diisi"
    },
    nickname: {
      component: "TextField",
      label: "Panggilan",
      placeholder: "Nama Panggilan",
      value: state.user.nickname,
      required: isRequired("nickname")
    },
    email: {
      component: "TextField",
      type: "email",
      label: "Email",
      placeholder: "Alamat Email",
      value: state.user.email,
      required: isRequired("email"),
      message:
        (!isRequirementFulfilled(state, "email") &&
          "Alamat Email harus diisi") ||
        (!isValid(state, "email") && "Alamat Email tidak valid": null)
    },
    phone: {
      component: "TextField",
      type: "tel",
      display: "content",
      label: "No. HP",
      placeholder: "081234567890",
      value: state.user.phone,
      required: isRequired("phone"),
      message:
        (!isRequirementFulfilled(state, "phone") && "No. HP harus diisi") ||
        (!isValid(state, "phone") && "No. HP tidak valid": null)
    },
    city: {
      component: "TextField",
      label: "Kota",
      placeholder: "Kota Domisili",
      value: state.user.city,
      required: isRequired("city"),
      message: !isRequirementFulfilled(state, "city") && "Kota harus diisi"
    },
    address: {
      component: "TextArea",
      label: "Alamat",
      placeholder: "Alamat Lengkap",
      value: state.user.address,
      rows: 4,
      required: isRequired("address")
    },
    notes: {
      component: "TextArea",
      label: "Catatan",
      placeholder: "Catatan Tambahan",
      value: state.user.notes,
      rows: 4,
      required: isRequired("notes")
    }
  },
  isInvalid: !areRequirementsFulfilled(state) || !isUserValid(state)
});

PemesanForm = connect(mapStateToProps, actions)(PemesanForm);

export default PemesanForm;
