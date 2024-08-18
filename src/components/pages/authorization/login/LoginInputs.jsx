import { Form, Formik } from "formik";
import React from "react";

import {
  initialValues,
  onSubmit,
  validationSchema,
} from "./formikHelper_login";
import { FormControl } from "../FormControl_Auth";
import { useNavigate } from "react-router-dom";

export const LoginInputs = () => {
  const navigate = useNavigate();

  return (
    <Formik
      onSubmit={(values, submitMethods) =>
        onSubmit(values, submitMethods, navigate)
      }
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {(formik) => {
        // console.log(formik);
        return (
          <Form>
            <div className="loginBox">
              <FormControl
                value="phone"
                formik={formik}
                control="input"
                type="text"
                name="phone"
                placeholder="&#xe167; تلفن"
                inputStyle="registerInputStyle"
              />
              <FormControl
                control="input"
                type="password"
                name="password"
                placeholder="&#xe167;  پسورد"
                inputStyle="loginInputStyle"
              />
            </div>
            <FormControl
              control="switch"
              name="remember"
              label="مرا بخاطر بسپار"
            />
            <div className="p-3 d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-success w-75 rounded-pill me-3"
              >
                ورود
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
