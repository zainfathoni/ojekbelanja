import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import Section from "./index";

setAddon(JSXAddon);

storiesOf("Section", module)
  .addDecorator(story => <ul style={{ textAlign: "center" }}>{story()}</ul>)
  .addDecorator(withKnobs)
  .addWithJSX(
    "default",
    withNotes("Section separates Cards")(() => (
      <Section
        id="section"
        label={text("Label", "Section")}
        keyword={text("Keyword", "ect")}
      >
        <div />
      </Section>
    ))
  );
