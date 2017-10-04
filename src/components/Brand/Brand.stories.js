import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import Brand from ".";

setAddon(JSXAddon);

storiesOf("Brand", module).addWithJSX(
  "default",
  withNotes("Ojek Belanja Brand component")(() => <Brand />)
);
