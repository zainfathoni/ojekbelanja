import React from "react";
import { mount } from "enzyme";
import AuthForm from ".";

require("../../../.storybook/shim.js");
require("../../../.storybook/enzyme_setup.js");

describe("AuthForm", () => {
  const change = jest.fn();
  const submit = jest.fn();
  let authForm;
  beforeEach(() => {
    authForm = mount(
      <AuthForm
        uid={null}
        fields={{
          name: {
            value: "Zain Fathoni",
            required: true,
            message: "Nama palsu"
          },
          email: {
            value: "zain@ojekbelanja.id",
            required: true,
            message: "Alamat palsu"
          }
        }}
        isInvalid={false}
        isPasswordValid={change}
        onChange={() => {}}
        onSubmit={submit}
      />
    );
  });

  it("calls isPasswordValid correctly", () => {
    const password = authForm.find("#password");
    password.simulate("change", { target: { value: "123456" } });

    expect(change.mock.calls.length).toBeGreaterThanOrEqual(1);
  });

  it("switches to Register", () => {
    const button = authForm.find("button.Login-heading-action");
    button.simulate("click");

    expect(authForm.state("isRegister")).toEqual(true);
  });

  it("calls onSubmit correctly", () => {
    authForm = mount(
      <AuthForm
        uid={null}
        fields={{
          name: {
            value: "Zain Fathoni",
            required: true,
            message: "Nama palsu"
          },
          email: {
            value: "zain@ojekbelanja.id",
            required: true,
            message: "Alamat palsu"
          }
        }}
        isInvalid={false}
        isPasswordValid={() => true}
        onChange={() => {}}
        onSubmit={submit}
      />
    );

    const button = authForm.find("button.Button-fullwidth");
    button.simulate("click");

    expect(submit.mock.calls.length).toBe(1);
  });
});
