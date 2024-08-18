import { ErrorMessage, FastField } from "formik";
import React, { useState } from "react";

export const Radiobtn = ({
  name,
  length,
  setLengthUnit,
  title,
  label,
  reInitialValue,
}) => {
  console.log(reInitialValue);
  return (
    <div>
      <FastField>
        {({ form }) => {
          return (
            <>
              <div className="control d-flex align-items-center">
                <span>{title}: </span>
                {Object.keys(label).map((key) => (
                  <label className="radio ps-3">
                    {label[key]}
                    <input
                      className="pointer"
                      type="radio"
                      name="answer"
                      value={key}
                      onClick={(e) => {
                        console.log(label[key]);
                        console.log(key);
                        setLengthUnit(key);
                      }}
                      checked
                    />
                  </label>
                ))}
              </div>
            </>
          );
        }}
      </FastField>
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger">{msg}</small>}
      />
    </div>
  );
};
