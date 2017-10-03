import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import Form from "./index";

setAddon(JSXAddon);

storiesOf("Form", module)
  .addDecorator(withKnobs)
  .addWithJSX(
    "with Footer",
    withNotes("Form with Footer")(() => (
      <Form
        name="with-footer"
        title={text("Title", "Pesanan Anda")}
        icon={
          <i
            className={`fa fa-lg fa-${text("Icon", "shopping-cart")}`}
            aria-hidden="true"
          />
        }
        header={<div>Header</div>}
        footer={<div>Footer</div>}
      >
        <div style={{ height: 200 }}>Content</div>
      </Form>
    ))
  )
  .addWithJSX(
    "without Footer",
    withNotes("Form without Footer")(() => (
      <Form
        name="with-footer"
        title={text("Title", "Data Pemesan")}
        icon={
          <i
            className={`fa fa-lg fa-${text("Icon", "address-card")}`}
            aria-hidden="true"
          />
        }
        header={<div>Header</div>}
      >
        <div style={{ height: 200 }}>Content</div>
      </Form>
    ))
  );
