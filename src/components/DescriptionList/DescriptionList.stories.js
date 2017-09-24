import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import DescriptionList from "./index";

setAddon(JSXAddon);

storiesOf("DescriptionList", module).addWithJSX(
  "default",
  withNotes(
    "Description List in 2 columns, will transform to 1 column if media width is smaller than 30em"
  )(() => (
    <DescriptionList
      list={[
        { term: "No. Pesanan", definition: "" },
        { term: "Tanggal Pengiriman", definition: "" },
        { term: "Nama", definition: "Zain Fathoni" },
        { term: "Panggilan", definition: "zain" },
        { term: "Email", definition: "zain.fathoni@gmail.com" },
        { term: "No. HP", definition: "087821307700" },
        { term: "Kota", definition: "Bandung" },
        { term: "Alamat", definition: "Tubagus Ismail" },
        {
          term: "Catatan",
          definition: "Telepon saja kalau sudah sampai lokasi"
        }
      ]}
    />
  ))
);
