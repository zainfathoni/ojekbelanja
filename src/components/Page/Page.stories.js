import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";

import Page from ".";

setAddon(JSXAddon);

storiesOf("Page", module)
  .addDecorator(story => <Router>{story()}</Router>)
  .addDecorator(withKnobs)
  .addWithJSX(
    "single column",
    withNotes("Page with single column")(() => (
      <Page>
        <div>Column</div>
      </Page>
    ))
  )
  .addWithJSX(
    "two columns",
    withNotes("Page with two columns")(() => (
      <Page
        left={<div>Left Column</div>}
        right={<div>Right Column</div>}
        footer={<div>Footer</div>}
      />
    ))
  );
