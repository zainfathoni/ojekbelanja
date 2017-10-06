import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";

import Button from ".";

setAddon(JSXAddon);

const options = {
  fullwidth: "Fullwidth",
  content: "Content",
  icon: "Icon"
};

storiesOf("Button", module)
  .addDecorator(story => (
    <Router>
      <div style={{ width: 200 }}>{story()}</div>
    </Router>
  ))
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
  )
  .addWithJSX(
    "link",
    withNotes("Button is a link")(() => (
      <Button
        link="/relative/path"
        display={select("Display Mode", options, "fullwidth")}
        icon={text("Icon", "shopping-cart")}
        text={text("Text", "Beli")}
        isSecondary={boolean("isSecondary", false)}
        disabled={boolean("Disabled", false)}
      />
    ))
  );
