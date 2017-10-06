import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  number,
  boolean,
  select
} from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";

import TextArea from ".";

setAddon(JSXAddon);

const options = {
  fullwidth: "Fullwidth",
  content: "Content",
  fixed: "Fixed"
};

storiesOf("TextArea", module)
  .addDecorator(withKnobs)
  .addWithJSX(
    "default",
    withNotes("TextArea with default props")(() => (
      <TextArea
        value={text("Value", "")}
        label={text("Label", "Default")}
        onChange={action("default-change")}
      />
    ))
  )
  .addWithJSX(
    "required",
    withNotes("TextField required")(() => (
      <TextArea
        type={text("Type", "email")}
        display={select("Display Mode", options, "content")}
        name={text("Name", "email")}
        label={text("Label", "Email")}
        placeholder={text("Placeholder", "Alamat Email")}
        value={text("Value", "")}
        onChange={action("email-change")}
        rows={number("Rows", 3)}
        required={boolean("Required", true)}
      />
    ))
  )
  .addWithJSX(
    "with invalid message",
    withNotes("TextArea with invalid message")(() => (
      <TextArea
        type={text("Type", "email")}
        display={select("Display Mode", options, "content")}
        name={text("Name", "email")}
        label={text("Label", "Email")}
        placeholder={text("Placeholder", "Alamat Email")}
        value={text("Value", "")}
        onChange={action("email-change")}
        message={text("Validation Message", "Alamat Email tidak valid")}
        rows={number("Rows", 3)}
        required={boolean("Required", true)}
      />
    ))
  );
