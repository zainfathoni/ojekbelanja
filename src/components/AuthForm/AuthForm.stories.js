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
    "is valid",
    withNotes("Authentication Form is valid")(() => (
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
          }
        }}
        isInvalid={boolean("isInvalid", false)}
        isPasswordValid={value => true}
        onChange={action("change")}
        onSubmit={action("submit")}
      />
    ))
  )
  .addWithJSX(
    "is invalid",
    withNotes("Authentication Form is invalid")(() => (
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
          }
        }}
        isInvalid={boolean("isInvalid", true)}
        isPasswordValid={value => false}
        onChange={action("change")}
        onSubmit={action("submit")}
      />
    ))
  )
  .addWithJSX(
    "logged in",
    withNotes("Authentication Form user is logged in")(() => (
      <AuthForm
        uid={12345}
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
          }
        }}
        isInvalid={boolean("isInvalid", false)}
        isPasswordValid={value => true}
        onChange={action("change")}
        onSubmit={action("submit")}
      />
    ))
  );
