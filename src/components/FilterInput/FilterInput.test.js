import React from "react";
import { configure, shallow } from "enzyme";
import FilterInput from "./index";

require("../../../.storybook/enzyme_setup.js");

describe("FilterInput", () => {
  it("FilterInput with Button behaves without error", () => {
    const filterInput = shallow(
      <FilterInput
        placeholder="Cari Produk"
        keyword="ay"
        withButton
        setKeyword={keyword => console.log(keyword)}
      />
    );
    const input = filterInput.find("input");
    input.simulate("change", { target: { value: "ayay" } });
    const form = filterInput.find("form").first();
    form.simulate("submit", { preventDefault: () => {} });
  });

  it("FilterInput without Button behaves without error", () => {
    const filterInput = shallow(
      <FilterInput
        placeholder="Cari Produk"
        keyword="ay"
        setKeyword={keyword => console.log(keyword)}
      />
    );
    const input = filterInput.find("input");
    input.simulate("change", { target: { value: "ayay" } });
  });
});
