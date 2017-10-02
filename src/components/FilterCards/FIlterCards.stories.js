import React from "react";
import { setAddon, storiesOf } from "@storybook/react";
import { withKnobs, text, object, boolean } from "@storybook/addon-knobs";
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
        sections={object("Sections", {
          ayam: "Ayam",
          bumbu: "Bumbu"
        })}
        items={object("Items", {
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
        })}
        actions={{
          ayam_fillet: action("plus"),
          bawang_putih: action("plus")
        }}
        actionsReverse={{
          ayam_fillet: action("minus"),
          bawang_putih: action("minus")
        }}
      />
    ))
  )
  .addWithJSX(
    "without Sections",
    withNotes("Filter Cards without Sections")(() => (
      <Router>
        <FilterCards
          keyword={text("Keyword", "an")}
          items={object("Items", {
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
          })}
        />
      </Router>
    ))
  )
  .addWithJSX(
    "is Fetching",
    withNotes("Filter Cards is Fetching")(() => (
      <Router>
        <FilterCards
          isFetching={boolean("is Fetching", true)}
          items={object("Items", {})}
          keyword=""
        />
      </Router>
    ))
  )
  .addWithJSX(
    "is Error",
    withNotes("Filter Cards is Error")(() => (
      <Router>
        <FilterCards
          error={text("Error Message", "Unable to establish connection")}
          items={object("Items", {})}
          keyword=""
        />
      </Router>
    ))
  );
