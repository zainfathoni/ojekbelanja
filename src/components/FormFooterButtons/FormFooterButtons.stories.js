import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";

import FormFooterButtons from ".";

setAddon(JSXAddon);

storiesOf("FormFooterButtons", module)
  .addDecorator(withKnobs)
  .addWithJSX(
    "enabled",
    withNotes("FormFooterButtons enabled")(() => (
      <Router>
        <FormFooterButtons
          buttons={{
            reset: {
              action: action("reset"),
              icon: text("Reset Icon", "times"),
              text: text("Reset Text", "Bersihkan"),
              title: text("Reset Title", "Bersihkan data"),
              disabled: boolean("Reset Disabled", false)
            },
            submit: {
              link: "/thankyou/jejen",
              icon: text("Submit Icon", "cart-arrow-down"),
              text: text("Submit Text", "Selesai"),
              title: text("Submit Title", "Konfirmasi pemesanan"),
              disabled: boolean("Submit Disabled", false)
            }
          }}
        />
      </Router>
    ))
  )
  .addWithJSX(
    "disabled",
    withNotes("FormFooterButtons disabled")(() => (
      <Router>
        <FormFooterButtons
          buttons={{
            reset: {
              action: action("reset"),
              icon: text("Reset Icon", "times"),
              text: text("Reset Text", "Bersihkan"),
              title: text("Reset Title", "Data kosong"),
              disabled: boolean("Reset Disabled", true)
            },
            submit: {
              link: "/thankyou/jejen",
              icon: text("Submit Icon", "cart-arrow-down"),
              text: text("Submit Text", "Selesai"),
              title: text("Submit Title", "Masih ada data yang tidak valid"),
              disabled: boolean("Submit Disabled", true)
            }
          }}
        />
      </Router>
    ))
  );
