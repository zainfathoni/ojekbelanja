import React from "react";
import { mount } from "enzyme";

import Option from ".";

require("../../../.storybook/shim.js");
require("../../../.storybook/enzyme_setup.js");

describe("Option", () => {
  it("calls onChange correctly", () => {
    const change = jest.fn();
    const option = mount(
      <Option
        name="option"
        values={{
          yes: "Ya",
          no: "Tidak"
        }}
        selectedValue={"no"}
        onChange={change}
      >
        Apakah ini horizontal?
      </Option>
    );
    const yes = option.find("#option_yes");

    yes.simulate("change", { target: { checked: true } });

    expect(change.mock.calls.length).toBe(1);
    expect(change.mock.calls[0][0]).toBe("option");
    expect(change.mock.calls[0][1]).toBeUndefined; // FIXME: Why is it undefined?
  });
});
