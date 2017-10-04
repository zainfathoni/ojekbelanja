import React from "react";
import { mount } from "enzyme";

import { isEmailValid } from "../../services/form";
import TextField from ".";

require("../../../.storybook/enzyme_setup.js");

describe("TextField", () => {
  let textField, email, field, value;
  beforeEach(() => {
    textField = mount(
      <TextField
        type="email"
        name="email"
        label="Email"
        value=""
        onChange={(f, v) => {
          field = f;
          value = v;
        }}
        validate={isEmailValid}
        message="Alamat Email tidak valid"
        required
      />
    );
    email = textField.find("#email");
    field = undefined;
    value = undefined;
  });

  it(" alls onChange correctly", () => {
    email.simulate("change", { target: { value: "gmail" } });
    expect(field).toBe("email");
    expect(value).toBe("gmail");
  });

  it("shows Requiring Message correctly", () => {
    expect(email.text()).toEqual("");
    const message = textField.find(".TextField");
    expect(message.text()).toEqual("Email");

    email.simulate("focus");
    email.simulate("blur");

    expect(message.text()).toEqual("Email* Email harus diisi");
  });

  it("shows Validation Message correctly", () => {
    textField.setProps({ value: "gmail" });
    expect(email.text()).toEqual("");
    const message = textField.find(".TextField");
    expect(message.text()).toEqual("Email");

    email.simulate("focus");
    email.simulate("blur");

    expect(message.text()).toEqual("Email* Alamat Email tidak valid");
  });

  it("valid by default", () => {
    const defaultTextField = mount(
      <TextField
        name="email"
        label="Email"
        value=""
        onChange={(f, v) => {
          field = f;
          value = v;
        }}
        onBlur={() => {}}
      />
    );
    email = defaultTextField.find("#email");
    expect(email.text()).toEqual("");
    const message = textField.find(".TextField");
    expect(message.text()).toEqual("Email");

    email.simulate("focus");
    email.simulate("blur");

    expect(message.text()).toEqual("Email");
  });
});
