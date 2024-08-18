import React from "react";
import { Form, Formik } from "formik";
import { FormControl } from "../FormControl_Auth";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "./formikHelper_register";

export const RegisterInputs = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div className="registerBox">
              <FormControl
                formik={formik}
                control="input"
                type="text"
                name="phone"
                placeholder="تلفن"
                inputStyle="registerInputStyle"
              />

              <FormControl
                formik={formik}
                control="input"
                type="password"
                name="password"
                placeholder="پسورد"
                inputStyle="registerInputStyle"
                errMsg="divErrMsg"
              />
              <FormControl
                formik={formik}
                control="input"
                type="password"
                name="confirmPassword"
                placeholder="تکرار پسورد"
                inputStyle="registerInputStyle"
              />
            </div>
            {/* ================= Register btn ================== */}
            <div className="p-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success w-75 rounded-pill mt-2"
              >
                ثبت نام
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
