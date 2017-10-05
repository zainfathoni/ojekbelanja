import React from "react";
import { mount } from "enzyme";

import TextArea from ".";

require("../../../.storybook/shim.js");
require("../../../.storybook/enzyme_setup.js");

describe("TextArea", () => {
  it("calls onChange correctly", () => {
    const change = jest.fn();
    const textArea = mount(
      <TextArea name="email" label="Email" value="" onChange={change} />
    );
    const email = textArea.find("#email");

    email.simulate("change", { target: { value: "gmail" } });

    expect(change.mock.calls.length).toBe(1);
    expect(change.mock.calls[0][0]).toBe("email");
    expect(change.mock.calls[0][1]).toBe("gmail");
  });

  it("shows Invalid Message correctly", () => {
    const textArea = mount(
      <TextArea
        name="email"
        label="Email"
        value=""
        onChange={() => {}}
        message="Alamat Email tidak valid"
        required
      />
    );
    const email = textArea.find("#email");
    const message = textArea.find(".TextArea");

    expect(message.text()).toEqual("Email");

    email.simulate("focus");
    email.simulate("blur");

    expect(message.text()).toEqual("Email* Alamat Email tidak valid");
  });

  it("calls onBlur correctly", () => {
    const blur = jest.fn();
    const textArea = mount(
      <TextArea
        name="email"
        label="Email"
        value="zainfathoni@ojekbelanja.id"
        onChange={() => {}}
        onBlur={blur}
      />
    );
    const email = textArea.find("#email");

    email.simulate("focus");
    email.simulate("blur");

    expect(blur.mock.calls.length).toBe(1);
    expect(blur.mock.calls[0][0]).toBe("email");
    expect(blur.mock.calls[0][1]).toBe("zainfathoni@ojekbelanja.id");
  });
});
