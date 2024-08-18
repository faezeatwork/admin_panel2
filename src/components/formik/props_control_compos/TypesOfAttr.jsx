import { Field } from "formik";
import React from "react";

export const TypesOfAttr = ({ name, titleOfAttr, unitOfAttr }) => {
  return (
    <div className="">
      <div className="container">
        <div className="input-group py-1">
          <span
            className="input-group-text w-25 d-flex justify-content-center"
            htmlFor=""
          >
            {titleOfAttr}
          </span>
          <Field name={name} type="input" className="form-control" />
          <span
            className="input-group-text w-25 d-flex justify-content-center"
            htmlFor=""
          >
            {unitOfAttr}
          </span>
        </div>
      </div>
    </div>
  );
};
