import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";

import FormFooterNumbers from ".";

setAddon(JSXAddon);

storiesOf("FormFooterNumbers", module)
  .addDecorator(story => <div style={{ width: 350 }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addWithJSX(
    "default",
    withNotes("FormFooterNumbers with default props")(() => (
      <FormFooterNumbers
        labelSmall={text("Label Small", "Ongkos Kirim")}
        numberSmall={text("Number Small", "Rp 5.000")}
        labelBig={text("Label Big", "Harga Total")}
        numberBig={text("Number Big", "Rp 55.000")}
      />
    ))
  );
