import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";

import { isEmailValid } from "../../services/form";
import FormFields from "./index";

setAddon(JSXAddon);

storiesOf("FormFields", module)
  .addDecorator(withKnobs)
  .addWithJSX(
    "with Footer",
    withNotes("Form with Footer")(() => (
      <FormFields
        name="with-footer"
        title={text("Title", "Data Pemesan")}
        icon="address-card"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        fields={{
          email: {
            component: "TextField",
            type: "email",
            label: "Email",
            placeholder: "Alamat Email",
            value: text("Email", ""),
            validate: isEmailValid,
            message: "Alamat Email tidak valid",
            required: true
          },
          address: {
            component: "TextArea",
            label: "Alamat",
            placeholder: "Alamat Lengkap",
            value: text("Alamat", ""),
            rows: 4,
            required: true
          }
        }}
        onChange={action("email-change")}
      />
    ))
  );
