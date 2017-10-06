import React from "react";
import { PropTypes as T } from "prop-types";
import { Link } from "react-router-dom";

import * as actions from "../../actions";
import Form from "../Form";
import Button from "../Button";

import "./FormFooterButtons.css";

export default function FormFooterButtons({ buttons }) {
  const buttonComponents = buttons.map(button => (
    <Button
      className={`FormFooterButtons-${button.category}`}
      display="content"
      isSecondary={button.category === "secondary"}
    />
  ));

  return (
    <div>
      {buttons.map(
        (button, id) =>
          !button.action ? (
            <Link to={button.link}>{buttonComponents[id]}</Link>
          ) : (
            <div>{buttonComponents[id]}</div>
          )
      )}
      <Button
        className="FormFooterButtons-secondary"
        type="reset"
        display="content"
        action={buttons[0].action}
        icon="times"
        text="Bersihkan"
        disabled={false}
        title={"Bersihkan data"}
        isSecondary
      />
      <Link to={`/thankyou/jejen`}>
        <Button
          className="FormFooterButtons-cta"
          type="submit"
          display="content"
          icon="cart-arrow-down"
          text="Selesai"
          disabled={false}
          title={"Konfirmasi Pemesanan"}
        />
      </Link>
    </div>
  );
}

FormFooterButtons.propTypes = {
  buttons: T.arrayOf(
    T.shape({
      category: T.oneOf(["cta", "secondary"]).isRequired,
      action: T.func,
      link: T.string
    })
  ).isRequired
};
