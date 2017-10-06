import React from "react";
import { PropTypes as T } from "prop-types";

import * as actions from "../../actions";
import Form from "../Form";
import Button from "../Button";

import "./FormFooterButtons.css";

export default function FormFooterButtons({ buttons }) {
  return (
    <div>
      {Object.keys(buttons).map(key => {
        const button = buttons[key];
        return (
          <Button
            key={key}
            className={`FormFooterButtons-${button.category}`}
            display="content"
            link={button.link}
            isSecondary={button.category === "secondary"}
          />
        );
      })}
      <Button
        className="FormFooterButtons-secondary"
        type="reset"
        display="content"
        action={buttons.secondary.action}
        icon="times"
        text="Bersihkan"
        disabled={false}
        title={"Bersihkan data"}
        isSecondary
      />
      <Button
        className="FormFooterButtons-cta"
        type="submit"
        display="content"
        link="/thankyou/jejen"
        icon="cart-arrow-down"
        text="Selesai"
        disabled={false}
        title={"Konfirmasi Pemesanan"}
      />
    </div>
  );
}

FormFooterButtons.propTypes = {
  buttons: T.objectOf(
    T.shape({
      category: T.oneOf(["cta", "secondary"]).isRequired,
      action: T.func,
      link: T.string
    })
  ).isRequired
};
