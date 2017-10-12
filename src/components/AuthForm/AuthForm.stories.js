import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";

import AuthForm from ".";

setAddon(JSXAddon);

storiesOf("AuthForm", module)
  .addDecorator(story => (
    <main
      style={{
        width: "90%",
        maxWidth: "21rem",
        margin: "auto"
      }}
    >
      {story()}
    </main>
  ))
  .addDecorator(withKnobs)
  .addWithJSX(
    "login",
    withNotes("Authentication Form for Signing In")(() => (
      <AuthForm
        uid={null}
        fields={{
          name: {
            value: text("Nama", "Zain Fathoni"),
            required: true,
            message: "Nama palsu"
          },
          email: {
            value: text("Email", "zain@ojekbelanja.id"),
            required: true,
            message: "Alamat palsu"
          },
          password: {
            value: text("Password", "123456"),
            required: true,
            message: "Password palsu"
          }
        }}
        isInvalid={boolean("isInvalid", false)}
        onChange={action("change")}
        onSubmit={action("submit")}
      />
    ))
  );
