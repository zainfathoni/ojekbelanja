import React from "react";
import { mount } from "enzyme";

import ListItem from ".";

require("../../../.storybook/shim.js");
require("../../../.storybook/enzyme_setup.js");

describe("ListItem", () => {
  const set = jest.fn();
  const remove = jest.fn();
  let listItem;
  beforeEach(() => {
    listItem = mount(
      <ListItem
        id="bawang_putih"
        name="Bawang Putih"
        desc="Bawang Putih"
        image={require("../../css/images/placeholder-224x224.png")}
        unit="kg"
        step={0.1}
        price={35000}
        category="bumbu"
        count={1}
        quantity="100 gram"
        subtotal="Rp 15.500"
        setOrder={set}
        removeOrder={remove}
      />
    );
  });

  it("calls setOrder correctly", () => {
    const amount = listItem.find("input#bawang_putih");
    amount.simulate("change", { target: { value: 0.2 } });

    expect(set.mock.calls.length).toBe(1);
    expect(set.mock.calls[0][0]).toBe("bawang_putih");
    expect(set.mock.calls[0][1]).toBe(2);
  });

  it("calls removeOrder correctly", () => {
    const btn = listItem.find("button");
    btn.simulate("click");

    expect(remove.mock.calls.length).toBe(1);
    expect(remove.mock.calls[0][0]).toBe("bawang_putih");
  });

  it("calls onBlur correctly", () => {
    const amount = listItem.find("input#bawang_putih");

    amount.simulate("blur");
    listItem.setProps({ count: 0 });
    amount.simulate("blur");

    expect(remove.mock.calls.length).toBe(2);
    expect(remove.mock.calls[1][0]).toBe("bawang_putih");
  });
});
