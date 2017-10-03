import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
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
      >
        <div style={{ height: 200 }}>Content</div>
      </FormFields>
    ))
  );
