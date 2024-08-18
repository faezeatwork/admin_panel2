import { FastField } from "formik";
import React from "react";

export const SwitchCheckBox = ({ label, name, customClass }) => {
  return (
    <div className={`${customClass} form-check form-switch`}>
      <div className="form-check d-flex align-items-center justify-content-center">
        <span className="form-check-label ps-3">{label}</span>
        <FastField
          id={name}
          name={name}
          type="checkbox"
          className="form-check-input pointer"
        />
      </div>
    </div>
  );
};

//(برای دکمه ی (مرا بخاطر بسپار
// و نمایش در فیلتر در ثبت ویژگی
