import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";

import Card from "./index";
import image from "../../../css/images/placeholder-224x224.png";

setAddon(JSXAddon);

storiesOf("Card", module)
  .addDecorator(story => (
    <ul style={{ width: 200, textAlign: "center" }}>{story()}</ul>
  ))
  .addDecorator(withKnobs)
  .addWithJSX(
    "product with overlay",
    withNotes("Product Card with overlay")(() => (
      <Card
        keyword={text("Keyword", "ay")}
        id="ayam_fillet"
        title={text("Title", "Ayam Fillet")}
        description={text("Description", "Ayam Fillet Paha")}
        image={image}
        price={number("Price", 42000)}
        unit={text("Unit", "kg")}
        action={action("plus")}
        actionReverse={action("minus")}
        overlay={text("Overlay", "750 gram")}
        ribbon={text("Ribbon", "Diskon 10%")}
        tooltip={text("Tooltip", "Minimum pembelian 1 kg")}
        disabled={boolean("Disabled", false)}
      />
    ))
  )
  .addWithJSX(
    "product without overlay",
    withNotes("Product Card without overlay")(() => (
      <Card
        keyword={text("Keyword", "ay")}
        id="ayam_fillet"
        title={text("Title", "Ayam Fillet")}
        description={text("Description", "Ayam Fillet Paha")}
        image={image}
        price={number("Price", 42000)}
        unit={text("Unit", "kg")}
        action={action("plus")}
        actionReverse={action("minus")}
        overlay={text("Overlay", "")}
        ribbon={text("Ribbon", "Diskon 10%")}
        tooltip={text("Tooltip", "Minimum pembelian 1 kg")}
        disabled={boolean("Disabled", false)}
      />
    ))
  )
  .addWithJSX(
    "product empty",
    withNotes("Product Card with empty stock")(() => (
      <Card
        keyword={text("Keyword", "ay")}
        id="ayam_fillet"
        title={text("Title", "Ayam Fillet")}
        description={text("Description", "Ayam Fillet Paha")}
        image={image}
        price={number("Price", 42000)}
        unit={text("Unit", "kg")}
        action={action("plus")}
        actionReverse={action("minus")}
        ribbon={text("Ribbon", "Diskon 10%")}
        tooltip={text("Tooltip", "Minimum pembelian 1 kg")}
        disabled={boolean("Disabled", true)}
      />
    ))
  )
  .addWithJSX(
    "store",
    withNotes("Toko Card")(() => (
      <Router>
        <Card
          keyword={text("Keyword", "je")}
          id="jejen"
          title={text("Title", "Jejen")}
          description={text("Description", "Sadang Serang & Sekeloa")}
          image={image}
          price={number("Price", 2000)}
          unit={text("Unit", "pengiriman")}
          overlay={text("Overlay", "")}
          ribbon={text("Ribbon", "")}
          tooltip={text("Tooltip", "")}
          disabled={boolean("Disabled", false)}
        />
      </Router>
    ))
  );
