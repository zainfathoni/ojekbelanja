import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";

import Option from ".";

setAddon(JSXAddon);

const option = {
  yes: "Ya",
  no: "Tidak"
};

storiesOf("Option", module)
  .addDecorator(withKnobs)
  .addWithJSX(
    "default",
    withNotes("Option with default props")(() => (
      <Option
        name={text("Name", "option")}
        values={option}
        selectedValue={select("Selected", option, "yes")}
        vertical={boolean("Vertical", false)}
        required={boolean("Required", false)}
        onChange={action("change")}
      >
        {text("Option Description", "Apakah ini horizontal?")}
      </Option>
    ))
  )
  .addWithJSX(
    "vertical required",
    withNotes("Option with vertical & required props")(() => (
      <Option
        name={text("Name", "option")}
        values={option}
        selectedValue={select("Selected", option, "no")}
        vertical={boolean("Vertical", true)}
        required={boolean("Required", true)}
        onChange={action("change")}
      >
        {text("Option Description", "Apakah ini horizontal?")}
      </Option>
    ))
  );
