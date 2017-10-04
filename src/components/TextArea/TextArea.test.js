import React from "react";
import { mount } from "enzyme";

import { isEmailValid } from "../../services/form";
import TextArea from ".";

require("../../../.storybook/enzyme_setup.js");

describe("TextArea", () => {
  let textArea, email, field, value;
  beforeEach(() => {
    textArea = mount(
      <TextArea
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
    email = textArea.find("#email");
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
    const message = textArea.find(".TextArea");
    expect(message.text()).toEqual("Email");

    email.simulate("focus");
    email.simulate("blur");

    expect(message.text()).toEqual("Email* Email harus diisi");
  });

  it("shows Validation Message correctly", () => {
    textArea.setProps({ value: "gmail" });
    expect(email.text()).toEqual("gmail");
    const message = textArea.find(".TextArea");
    expect(message.text()).toEqual("Emailgmail");

    email.simulate("focus");
    email.simulate("blur");

    expect(message.text()).toEqual("Emailgmail* Alamat Email tidak valid");
  });

  it("valid by default", () => {
    const defaultTextArea = mount(
      <TextArea
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
    email = defaultTextArea.find("#email");
    expect(email.text()).toEqual("");
    const message = textArea.find(".TextArea");
    expect(message.text()).toEqual("Email");

    email.simulate("focus");
    email.simulate("blur");

    expect(message.text()).toEqual("Email");
  });
});
