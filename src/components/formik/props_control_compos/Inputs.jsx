import { ErrorMessage, Field } from "formik";
import React from "react";

export const Inputs = (props) => {
  const { title, extraTitle, type, name, placeholder, mandatory } = props;

  return (
    <div className="p-2">
      <div className="input-group">
        <span
          className="input-group-text titleSpan customWidth-112"
          id="basic-addon2"
        >
          {title ? title : placeholder}
          {mandatory ? <span>*</span> : null}
          {extraTitle}
        </span>
        <Field
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
        />
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};
