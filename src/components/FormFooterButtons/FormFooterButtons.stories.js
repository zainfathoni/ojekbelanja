import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
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
              icon: "times",
              text: "Bersihkan",
              title: "Bersihkan data"
            },
            submit: {
              link: "/thankyou/jejen",
              icon: "cart-arrow-down",
              text: "Selesai",
              title: "Konfirmasi Pemesanan"
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
              icon: "times",
              text: "Bersihkan",
              title: "Data sudah bersih",
              disabled: true
            },
            submit: {
              link: "/thankyou/jejen",
              icon: "cart-arrow-down",
              text: "Selesai",
              title: "Masih ditemukan data yang tidak valid",
              disabled: true
            }
          }}
        />
      </Router>
    ))
  );
