import React from "react";
import { mount } from "enzyme";
import FormFields from ".";

require("../../../.storybook/shim.js");
require("../../../.storybook/enzyme_setup.js");

describe("FormFields", () => {
  const change = jest.fn();
  const submit = jest.fn();
  let formFields;
  beforeEach(() => {
    formFields = mount(
      <FormFields
        name="with-footer"
        title={"Data Pemesan"}
        icon="address-card"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        fields={{
          email: {
            component: "TextField",
            type: "email",
            label: "Email",
            placeholder: "Alamat Email",
            value: "",
            required: true
          }
        }}
        onChange={change}
        onSubmit={submit}
      />
    );
  });

  it("calls onChange correctly", () => {
    const email = formFields.find("#email");
    email.simulate("change", { target: { value: "gmail" } });

    expect(change.mock.calls.length).toBe(1);
    expect(change.mock.calls[0][0]).toBe("email");
    expect(change.mock.calls[0][1]).toBe("gmail");
  });

  it("calls onSubmit correctly", () => {
    const email = formFields.find("#email");
    email.simulate("submit", { preventDefault: () => {} });

    expect(submit.mock.calls.length).toBe(1);
  });
});
