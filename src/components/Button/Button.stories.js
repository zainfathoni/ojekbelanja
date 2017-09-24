import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./index";

storiesOf("Button", module)
  .addDecorator(story => <div style={{ width: 200 }}>{story()}</div>)
  .add("default", () => <Button action={action("button-click")} />)
  .add("primary", () => (
    <Button
      action={action("button-click")}
      display="fullwidth"
      icon="shopping-cart"
      text="Fullwidth"
    />
  ))
  .add("secondary", () => (
    <Button
      action={action("button-click")}
      display="content"
      icon="shopping-cart"
      text="Content"
      isSecondary
    />
  ))
  .add("icon", () => (
    <Button action={action("button-click")} display="icon" icon="trash" />
  ));
