import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, number, boolean } from "@storybook/addon-knobs";
import JSXAddon from "storybook-addon-jsx";
import { withNotes } from "@storybook/addon-notes";
import { action } from "@storybook/addon-actions";
import { BrowserRouter as Router } from "react-router-dom";

import FilterCards from "./index";

setAddon(JSXAddon);

storiesOf("FilterCards", module)
  .addDecorator(story => <ul style={{ textAlign: "center" }}>{story()}</ul>)
  .addDecorator(withKnobs)
  .addWithJSX(
    "with Sections",
    withNotes("Filter Cards with Sections")(() => (
      <FilterCards
        keyword={text("Keyword", "a")}
        sections={{
          ayam: "Ayam",
          bumbu: "Bumbu"
        }}
        items={{
          ayam_fillet: {
            section: "ayam",
            title: "Ayam Fillet",
            description: "Ayam Fillet",
            image: require("../../css/images/placeholder-224x224.png"),
            price: 42000,
            unit: "kg",
            overlay: "750 gram",
            ribbon: "Diskon",
            tooltip: "Diskon Akhir Pekan"
          },
          bawang_putih: {
            section: "bumbu",
            title: "Bawang Putih",
            description: "Bawang Putih",
            image: require("../../css/images/placeholder-224x224.png"),
            price: 35000,
            unit: "kg",
            disabled: true
          }
        }}
        action={action("plus")}
        actionReverse={action("minus")}
      />
    ))
  )
  .addWithJSX(
    "without Sections",
    withNotes("Filter Cards without Sections")(() => (
      <Router>
        <FilterCards
          keyword={text("Keyword", "an")}
          items={{
            jejen: {
              title: "Jejen",
              description: "Sadang Serang & Sekeloa",
              image: require("../../css/images/placeholder-224x224.png"),
              price: 5000,
              unit: "pengiriman",
              ribbon: "Promo",
              tooltip: "Promo Akhir Tahun"
            },
            zaenal: {
              title: "Zaenal",
              description: "Jatihandap & Padasuka",
              image: require("../../css/images/placeholder-224x224.png"),
              price: 3000,
              unit: "pengiriman",
              overlay: "Cuti",
              disabled: true
            }
          }}
        />
      </Router>
    ))
  )
  .addWithJSX(
    "is Fetching",
    withNotes("Filter Cards is Fetching")(() => (
      <FilterCards isFetching items={{}} keyword="" />
    ))
  )
  .addWithJSX(
    "is Error",
    withNotes("Filter Cards is Error")(() => (
      <FilterCards
        error="Unable to establish connection"
        items={{}}
        keyword=""
      />
    ))
  );
