import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";

import { isEmailValid } from "../../services/form";
import TextField from "./index";

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
    withNotes("TextField with default prors")(() => (
      <TextField
        value={text("Value", "")}
        label={text("Label", "Default")}
        onChange={action("default-change")}
      />
    ))
  )
  .addWithJSX(
    "required with validation",
    withNotes("TextField required with validation")(() => (
      <TextField
        type={text("Type", "email")}
        display={select("Display Mode", options, "content")}
        name={text("Name", "email")}
        label={text("Label", "Email")}
        placeholder={text("Placeholder", "Alamat Email")}
        value={text("Value", "")}
        onChange={action("email-change")}
        validate={isEmailValid}
        message={text("Validation Message", "Alamat Email tidak valid")}
        required={boolean("Required", true)}
      />
    ))
  )
  .addWithJSX(
    "required without validation",
    withNotes("TextField required without validation")(() => (
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
  );
