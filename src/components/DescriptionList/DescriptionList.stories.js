import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import DescriptionList from "./index";
import Term from "./Term";
import Description from "./Description";

setAddon(JSXAddon);

storiesOf("DescriptionList", module).addWithJSX(
  "default",
  withNotes(
    "Description List in 2 columns, will transform to 1 column if media width is smaller than 30em"
  )(() => (
    <DescriptionList>
      <Term>No. Pesanan</Term>
      <Description />
      <Term>Nama</Term>
      <Description>Ojek Belanja</Description>
    </DescriptionList>
  ))
);
