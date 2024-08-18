import { ErrorMessage, FastField } from "formik";
import React from "react";

export const AddFile = (props) => {
  const { formik, label, type, name, placeholder } = props;
  // console.log(formik.values.image);
  const handleSetFieldValue = (e) => {
    formik.setFieldValue(name, e.target.files[0]);
  };
  return (
    <div className="p-2">
      <div className="input-group">
        <span className="input-group-text titleSpan customWidth-112">
          {label}
        </span>
        <FastField
          type="text"
          className="form-control"
          name={name}
          placeholder={placeholder}
          value={formik.values[name] ? formik.values[name].name : ""}
          onChange={() => {}}
        />
        <input
          type="file"
          className="choose_file"
          onChange={(e) => handleSetFieldValue(e)}
        />
        <ErrorMessage
          name={name}
          render={(err) => <small className="text-danger w-100">{err}</small>}
        />
      </div>
    </div>
  );
};
