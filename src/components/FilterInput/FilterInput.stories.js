import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";

import FilterInput from ".";

setAddon(JSXAddon);

storiesOf("FilterInput", module)
  .addDecorator(story => (
    <ul style={{ width: 200, textAlign: "center" }}>{story()}</ul>
  ))
  .addDecorator(withKnobs)
  .addWithJSX(
    "with Button",
    withNotes("Filter Input with Button")(() => (
      <FilterInput
        placeholder={text("Placeholder", "Cari Produk")}
        keyword={text("Keyword", "ay")}
        withButton={boolean("with Button", true)}
        setKeyword={action("set-keyword")}
      />
    ))
  )
  .addWithJSX(
    "without Button",
    withNotes("Filter Input with Button")(() => (
      <FilterInput
        placeholder={text("Placeholder", "Cari Nama atau Area Layanan")}
        keyword={text("Keyword", "")}
        withButton={boolean("with Button", false)}
        setKeyword={action("set-keyword")}
      />
    ))
  );
