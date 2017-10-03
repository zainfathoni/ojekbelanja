import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";

import { isEmailValid } from "../../services/form";
import TextField from "./index";

setAddon(JSXAddon);

storiesOf("TextField", module)
  .addDecorator(withKnobs)
  .addWithJSX(
    "with email type",
    withNotes("TextField with email type")(() => (
      <TextField
        type={text("Type", "email")}
        name={text("Name", "email")}
        label={text("Label", "Email")}
        placeholder={text("Placeholder", "Alamat Email")}
        value={text("Value", "")}
        onChange={action("email-change")}
        validate={isEmailValid}
        message={text("Validation Message", "Alamat Email tidak valid")}
        required
      />
    ))
  );
