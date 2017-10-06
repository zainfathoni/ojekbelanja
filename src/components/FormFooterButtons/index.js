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
            className={`FormFooterButtons-${key}`}
            display="content"
            action={button.action}
            link={button.link}
            icon={button.icon}
            text={button.text}
            title={button.title}
            disabled={button.disabled}
            isSecondary={key === "reset"}
          />
        );
      })}
    </div>
  );
}

FormFooterButtons.propTypes = {
  buttons: T.objectOf(
    T.shape({
      action: T.func,
      link: T.string,
      icon: T.string,
      text: T.string,
      title: T.string,
      disabled: T.bool
    })
  ).isRequired
};
