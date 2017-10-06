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
    "pemesan",
    withNotes("FormFooterButtons for pemesan")(() => (
      <Router>
        <FormFooterButtons
          buttons={{
            secondary: {
              category: "secondary",
              action: action("secondary")
            },
            cta: {
              category: "cta",
              link: "/thankyou/jejen"
            }
          }}
        />
      </Router>
    ))
  );
