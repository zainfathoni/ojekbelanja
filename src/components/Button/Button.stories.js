import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { withNotes } from "@storybook/addon-notes";
import Button from "./index";

storiesOf("Button", module)
  .addDecorator(story => <div style={{ width: 200 }}>{story()}</div>)
  .addDecorator(withKnobs)
  .add(
    "text",
    withNotes("Button with icon and text")(() => (
      <Button
        action={action("button-click")}
        icon="shopping-cart"
        display={select(
          "Display Mode",
          ["fullwidth", "content", "icon"],
          "fullwidth"
        )}
        text={text("Text", "Beli")}
        isSecondary={boolean("isSecondary", false)}
        disabled={boolean("Disabled", false)}
      />
    ))
  )
  .add(
    "icon",
    withNotes("Button with icon only")(() => (
      <Button
        action={action("button-click")}
        icon="trash"
        display={select(
          "Display Mode",
          ["fullwidth", "content", "icon"],
          "icon"
        )}
        text={text("Text", "Hapus")}
        isSecondary={boolean("isSecondary", true)}
        disabled={boolean("Disabled", true)}
      />
    ))
  );
