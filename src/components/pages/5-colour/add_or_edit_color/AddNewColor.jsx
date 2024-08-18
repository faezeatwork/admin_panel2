import { ErrorMessage, FastField, Form, Formik } from "formik";
import React from "react";
import { FormikControl } from "../../../formik/FormikControl_AddItems";
import { SubmitBtn } from "../../../formik/SubmitBtn";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "../FormikHelper_colour";
import { useEffect } from "react";
import { useState } from "react";

export const AddNewColor = ({ colorToEdit, setColorToEdit, setData }) => {
  const [reInitialize, setReInitialize] = useState([]);
  const [colorPickerValue, setColorPickerValue] = useState("#000");
  useEffect(() => {
    if (colorToEdit) {
      setColorPickerValue(colorToEdit.code);
      setReInitialize({
        title: colorToEdit.title,
        code: colorToEdit.code,
      });
    } else {
      setColorPickerValue("#000");
      setReInitialize(null);
    }
  }, [colorToEdit]);

  //==== به صورت دستی باید رنگ ها رو تغییر بدیم =============
  const handleChangeColorCodeField = (e, form) => {
    setColorPickerValue(e.target.value);
    form.setFieldValue("code", e.target.value);
  };

  //==================== 📍return ==============================
  return (
    <div className="modal-content boxOfAddColor">
      <Formik
        initialValues={reInitialize || initialValues}
        onSubmit={(values, actions) =>
          onSubmit(
            values,
            actions,
            colorToEdit,
            setData,
            setColorToEdit,
            setColorPickerValue
          )
        }
        validationSchema={validationSchema}
        enableReinitialize
      >
        {(formik) => {
          return (
            <Form>
              {/* ==============  modal-header ============= */}
              <div className="modal-header">
                <h1 className=" w-100 fs-5" id="staticBackdropLabel">
                  {colorToEdit
                    ? `ویرایش رنگ ${colorToEdit.title}`
                    : "اضافه کردن گارانتی جدید"}
                </h1>
              </div>
              {/* ==============  modal-body ============== */}
              <FormikControl
                control="input"
                type="text"
                name="title"
                title="رنگ"
                placeholder="for example : black"
              />
              <div>
                <FastField>
                  {({ form }) => {
                    //console.log(form);
                    return (
                      <div className="d-flex align-items-center justify-content-start m-3">
                        <label htmlFor="code_color" className="ps-3">
                          کد رنگ
                        </label>
                        <input
                          type="color"
                          id="code_color"
                          value={colorPickerValue}
                          onChange={(e) => handleChangeColorCodeField(e, form)}
                        />
                      </div>
                    );
                  }}
                </FastField>
                <ErrorMessage
                  name="code"
                  render={(msg) => <small className="text-danger">{msg}</small>}
                />
              </div>
              <div className="text-center  pb-3">
                {/* ========== submit button ========== */}
                <SubmitBtn colorToEdit={colorToEdit} />
                {/* ======= ❌ (exit the modal) ======= */}
                <button
                  type="button"
                  className="btn btn-secondary "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    formik.resetForm();
                    setColorPickerValue("#000");
                    setReInitialize(null);
                    setColorToEdit(null);
                  }}
                >
                  انصراف
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
