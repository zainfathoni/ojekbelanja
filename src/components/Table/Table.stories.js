import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import Table from ".";

setAddon(JSXAddon);

storiesOf("Table", module)
  .addDecorator(withKnobs)
  .addWithJSX(
    "with 5 columns",
    withNotes("Table with 5 columns")(() => (
      <Table
        columns={[
          { id: "number", label: "No" },
          { id: "name", label: "Nama" },
          { id: "price", label: "Harga" },
          { id: "qty", label: "Jumlah" },
          { id: "subtotal", label: "Subtotal" }
        ]}
        rows={[
          {
            number: 1,
            name: "Ayam Fillet",
            price: "Rp 42000 /kg",
            qty: "1 kg",
            subtotal: "Rp 42,000"
          },
          {
            number: 2,
            name: "Jahe",
            price: "Rp 16,000 /kg",
            qty: "750 gram",
            subtotal: "Rp 12,000"
          }
        ]}
        footerColSpan={{
          name: 2,
          price: 3
        }}
        footerClassName={{
          1: "italic",
          2: "total"
        }}
        footer={[
          {
            name: "Total Belanja",
            price: "Rp 54,000"
          },
          {
            name: "Ongkos Kirim",
            price: "Rp 5,000"
          },
          {
            name: "Total Pembayaran",
            price: "Rp 59,000"
          }
        ]}
      />
    ))
  );
