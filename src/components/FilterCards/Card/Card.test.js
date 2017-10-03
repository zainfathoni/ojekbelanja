import React from "react";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

import Card from "./index";
import image from "../../../css/images/placeholder-224x224.png";

require("../../../../.storybook/enzyme_setup.js");

describe("Card", () => {
  it("Card with 2 buttons behaves without error", () => {
    let plusAction, minusAction;
    const card = mount(
      <Card
        keyword=""
        id="ayam_fillet"
        title="Ayam Fillet"
        description="Ayam Fillet Paha"
        image={image}
        price={42000}
        unit="kg"
        overlay="750 gram"
        action={id => {
          plusAction = id;
        }}
        actionReverse={id => {
          minusAction = id;
        }}
      />
    );
    const plusButton = card.find("button.Card-action-plus");
    expect(plusAction).toBeUndefined;
    plusButton.simulate("click");
    expect(plusAction).toBe("ayam_fillet");

    const minusButton = card.find("button.Card-action-minus");
    expect(minusAction).toBeUndefined;
    minusButton.simulate("click");
    expect(minusAction).toBe("ayam_fillet");
  });

  it("Card with 1 button behaves without error", () => {
    let plusAction;
    const card = mount(
      <Card
        keyword=""
        id="ayam_fillet"
        title="Ayam Fillet"
        description="Ayam Fillet Paha"
        image={image}
        price={42000}
        unit="kg"
        action={id => {
          plusAction = id;
        }}
      />
    );
    const plusButton = card.find("button");
    expect(plusAction).toBeUndefined;
    plusButton.simulate("click");
    expect(plusAction).toBe("ayam_fillet");
  });
});
