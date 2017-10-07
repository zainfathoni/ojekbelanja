import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { BrowserRouter as Router } from "react-router-dom";

import MainNav from ".";

setAddon(JSXAddon);

storiesOf("MainNav", module).addWithJSX(
  "default",
  withNotes("Main Navigation component")(() => (
    <Router>
      <div className="l-wrapper-MainNav">
        <MainNav />
      </div>
    </Router>
  ))
);
