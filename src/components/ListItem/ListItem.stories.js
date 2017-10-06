import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, object, number } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";

import ListItem from ".";

setAddon(JSXAddon);

storiesOf("ListItem", module)
  .addDecorator(story => <div style={{ width: 350 }}>{story()}</div>)
  .addDecorator(withKnobs)
  .addWithJSX(
    "default",
    withNotes("ListItem with default props")(() => (
      <ListItem
        id={text("ID", "bawang_putih")}
        item={object("Item", {
          name: "Bawang Putih",
          desc: "Bawang Putih",
          image: "placeholder-224x224.png",
          unit: "kg",
          step: 0.1,
          price: 35000,
          category: "bumbu"
        })}
        count={number("Count", 1)}
        quantity={text("Quantity", "100 gram")}
        subtotal={text("Subtotal", "Rp 15.500")}
        setOrder={action("set-order")}
        removeOrder={action("remove-order")}
      />
    ))
  );
