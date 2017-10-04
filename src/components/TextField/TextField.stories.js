import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";

import TextField from ".";

setAddon(JSXAddon);

const options = {
  fullwidth: "Fullwidth",
  content: "Content",
  fixed: "Fixed"
};

storiesOf("TextField", module)
  .addDecorator(withKnobs)
  .addWithJSX(
    "default",
    withNotes("TextField with default props")(() => (
      <TextField
        value={text("Value", "")}
        label={text("Label", "Default")}
        onChange={action("default-change")}
      />
    ))
  )
  .addWithJSX(
    "required",
    withNotes("TextField required")(() => (
      <TextField
        type={text("Type", "email")}
        display={select("Display Mode", options, "content")}
        name={text("Name", "email")}
        label={text("Label", "Email")}
        placeholder={text("Placeholder", "Alamat Email")}
        value={text("Value", "")}
        onChange={action("email-change")}
        required={boolean("Required", true)}
      />
    ))
  )
  .addWithJSX(
    "with invalid message",
    withNotes("TextField with invalid message")(() => (
      <TextField
        type={text("Type", "email")}
        display={select("Display Mode", options, "content")}
        name={text("Name", "email")}
        label={text("Label", "Email")}
        placeholder={text("Placeholder", "Alamat Email")}
        value={text("Value", "")}
        onChange={action("email-change")}
        message={text("Message", "Alamat Email tidak valid")}
        required={boolean("Required", false)}
      />
    ))
  );
