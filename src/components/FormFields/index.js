import React from "react";
import { PropTypes as T } from "prop-types";

import * as actions from "../../actions";
import Form from "../Form";
import Button from "../Button";
import TextField from "../TextField";
import TextArea from "../TextArea";

export default function FormFields({
  name,
  title,
  icon,
  onSubmit,
  header,
  footer,
  fields,
  onChange
}) {
  const onUpdate = (field, value) => {
    onChange(field, value);
  };
  return (
    <Form name={name} title={title} icon={icon} header={header} footer={footer}>
      {Object.keys(fields).map(key => {
        const f = fields[key];
        switch (f.component) {
          case "TextField":
            return (
              <TextField
                key={key}
                type={f.type}
                name={key}
                label={f.label}
                placeholder={f.placeholder}
                value={f.value}
                onChange={onUpdate}
                validate={f.validate}
                message={f.message}
                required={f.required}
              />
            );
          case "TextArea":
            return (
              <TextArea
                key={key}
                name={key}
                label={f.label}
                placeholder={f.placeholder}
                value={f.value}
                rows={4}
                onChange={onUpdate}
                required={f.required}
              />
            );
        }
      })}
    </Form>
  );
}

FormFields.propTypes = {
  name: T.string.isRequired,
  title: T.string.isRequired,
  icon: T.string.isRequired,
  onSubmit: T.func,
  header: T.node,
  fields: T.objectOf(
    T.shape({
      component: T.oneOf(["TextField", "TextArea"]).isRequired,
      type: T.oneOf(["email", "password"]),
      label: T.string.isRequired,
      placeholder: T.string.isRequired,
      value: T.string.isRequired,
      rows: T.int,
      validate: T.func,
      message: T.string,
      required: T.bool
    })
  ).isRequired,
  onChange: T.func.isRequired,
  children: T.node,
  footer: T.node
};
