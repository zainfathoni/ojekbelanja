import React from "react";
import { PropTypes as T } from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Form from "../Form";
import Button from "../Button";

import "./FormFields.css";

export default function FormFields({
  name,
  title,
  icon,
  onSubmit,
  header,
  children,
  footer
}) {
  return (
    <Form name={name} title={title} icon={icon} header={header} footer={footer}>
      {children}
    </Form>
  );
}

FormFields.propTypes = {
  name: T.string.isRequired,
  title: T.string.isRequired,
  icon: T.string.isRequired,
  onSubmit: T.func,
  header: T.node,
  children: T.node,
  footer: T.node
};
