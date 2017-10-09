import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";

import Order from ".";
import "../Page/Page.css";

setAddon(JSXAddon);

storiesOf("Order", module)
  .addDecorator(story => (
    <Router>
      <footer className="l-wrapper-footer">{story()}</footer>
    </Router>
  ))
  .addDecorator(withKnobs)
  .addWithJSX(
    "enabled",
    withNotes("Order enabled")(() => (
      <Order
        id="jejen"
        orderCount={number("Order Count", 5)}
        total={number("Total", 50000)}
        deliveryFee={number("Delivery Fee", 5000)}
        clearOrder={action("clear-order")}
      />
    ))
  )
  .addWithJSX(
    "disabled",
    withNotes("Order disabled")(() => (
      <Order
        id="jejen"
        orderCount={number("Order Count", 0)}
        total={number("Total", 50000)}
        deliveryFee={number("Delivery Fee", 5000)}
        clearOrder={action("clear-order")}
      />
    ))
  );
