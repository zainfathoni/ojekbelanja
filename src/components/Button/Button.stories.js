import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";
import JSXAddon from "storybook-addon-jsx";
import Button from "./index";

setAddon(JSXAddon);

const options = {
  fullwidth: "Fullwidth",
  content: "Content",
  icon: "Icon"
};

storiesOf("Button", module)
  .addDecorator(story => <div style={{ width: 200 }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addWithJSX(
    "text",
    withNotes("Button with icon and text")(() => (
      <Button
        action={action("button-click")}
        display={select("Display Mode", options, "fullwidth")}
        icon={text("Icon", "shopping-cart")}
        text={text("Text", "Beli")}
        isSecondary={boolean("isSecondary", false)}
        disabled={boolean("Disabled", false)}
      />
    ))
  )
  .addWithJSX(
    "icon",
    withNotes("Button with icon only")(() => (
      <Button
        action={action("button-click")}
        display={select("Display Mode", options, "icon")}
        icon={text("Icon", "trash")}
        text={text("Text", "Hapus")}
        isSecondary={boolean("isSecondary", true)}
        disabled={boolean("Disabled", true)}
      />
    ))
  );
