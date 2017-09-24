import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import Button from "./index";

storiesOf("Button", module)
  .addDecorator(story => <div style={{ width: 200 }}>{story()}</div>)
  .addDecorator(withKnobs)
  .add("text", () => (
    <Button
      action={action("button-click")}
      icon="shopping-cart"
      display={select(
        "Display Mode",
        ["fullwidth", "content", "icon"],
        "fullwidth"
      )}
      text={text("Text", "Button")}
      isSecondary={boolean("isSecondary", false)}
      disabled={boolean("Disabled", false)}
    />
  ))
  .add("icon", () => (
    <Button action={action("button-click")} display="icon" icon="trash" />
  ));
