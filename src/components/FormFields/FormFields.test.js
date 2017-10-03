import React from "react";
import { mount } from "enzyme";
import FormFields from "./index";

require("../../../.storybook/enzyme_setup.js");

describe("FormFields", () => {
  it("FormFields behaves without error", () => {
    let field, value;
    const formFields = mount(
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
        onChange={(f, v) => {
          field = f;
          value = v;
        }}
      />
    );
    expect(field).toBeUndefined;
    expect(value).toBeUndefined;

    const email = formFields.find("#email");
    email.simulate("change", { target: { value: "gmail" } });
    expect(field).toBe("email");
    expect(value).toBe("gmail");
  });
});
