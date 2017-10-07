import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import Order from ".";

require("../../../.storybook/shim.js");
require("../../../.storybook/enzyme_setup.js");

describe("Order", () => {
  const clear = jest.fn();
  let order;
  beforeEach(() => {
    order = mount(
      <Router>
        <Order
          id="jejen"
          orderCount={5}
          total={50000}
          deliveryFee={5000}
          clearOrder={clear}
        />
      </Router>
    );
  });

  it("calls clearOrder correctly", () => {
    const btn = order.find("button.Button-secondary");
    btn.simulate("click");

    expect(clear.mock.calls.length).toBe(1);
  });
});
