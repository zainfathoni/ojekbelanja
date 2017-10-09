import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import Header from ".";

setAddon(JSXAddon);

storiesOf("Header", module)
  .addDecorator(withKnobs)
  .addWithJSX(
    "default",
    withNotes("Header with default props")(() => <Header />)
  )
  .addWithJSX(
    "with Heading",
    withNotes("with Heading")(() => (
      <Header
        heading={text("Heading", "Toko Saya")}
        is404={boolean("is 404", false)}
      />
    ))
  )
  .addWithJSX(
    "is 404",
    withNotes("Header is 404")(() => (
      <Header heading={text("Heading", "")} is404={boolean("is 404", true)} />
    ))
  );
