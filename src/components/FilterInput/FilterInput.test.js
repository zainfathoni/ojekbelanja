import React from "react";
import { mount } from "enzyme";
import FilterInput from ".";

require("../../../.storybook/enzyme_setup.js");

describe("FilterInput", () => {
  it("FilterInput with Button behaves without error", () => {
    let keyword;
    const filterInput = mount(
      <FilterInput
        placeholder="Cari Produk"
        keyword="ay"
        withButton
        setKeyword={key => {
          keyword = key;
        }}
      />
    );
    const input = filterInput.find("input");
    input.simulate("change", { target: { value: "ayam" } });
    expect(keyword).toBeUndefined;

    const form = filterInput.find("form");
    form.simulate("submit", { preventDefault: () => {} });
    expect(keyword).toBe("ayam");
  });

  it("FilterInput without Button behaves without error", () => {
    let keyword;
    const filterInput = mount(
      <FilterInput
        placeholder="Cari Produk"
        keyword="ay"
        setKeyword={key => {
          keyword = key;
        }}
      />
    );
    expect(keyword).toBeUndefined;
    const input = filterInput.find("input");
    input.simulate("change", { target: { value: "ayam" } });
    expect(keyword).toBe("ayam");
  });
});
