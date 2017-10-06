import React from "react";
import { PropTypes as T } from "prop-types";

import Form from "../Form";
import TextField from "../TextField";
import TextArea from "../TextArea";

export default function FormFields({
  name,
  title,
  icon,
  header,
  footer,
  fields,
  onChange,
  onSubmit
}) {
  const change = (field, value) => {
    onChange(field, value);
  };
  const submit = e => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <Form
      name={name}
      title={title}
      icon={icon}
      header={header}
      footer={footer}
      onSubmit={e => submit(e)}
    >
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
                onChange={change}
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
                onChange={change}
                required={f.required}
              />
            );
          default:
            return null;
        }
      })}
    </Form>
  );
}

FormFields.propTypes = {
  name: T.string.isRequired,
  title: T.string.isRequired,
  icon: T.string.isRequired,
  header: T.node,
  fields: T.objectOf(
    T.shape({
      component: T.oneOf(["TextField", "TextArea"]),
      type: T.oneOf(["email", "password"]),
      label: T.string,
      placeholder: T.string,
      value: T.string,
      rows: T.int,
      validate: T.func,
      message: T.string,
      required: T.bool
    })
  ).isRequired,
  onChange: T.func.isRequired,
  onSubmit: T.func.isRequired,
  children: T.node,
  footer: T.node
};
