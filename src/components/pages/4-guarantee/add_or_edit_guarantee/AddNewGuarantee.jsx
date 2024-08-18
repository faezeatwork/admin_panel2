import React from "react";
import { SubmitBtn } from "../../../formik/SubmitBtn";
import { FormikControl } from "../../../formik/FormikControl_AddItems";
import { Form, Formik } from "formik";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "../FormikHelper_guarantee";
import { useState } from "react";
import { useEffect } from "react";
import { log10 } from "chart.js/helpers";

export const AddNewGuarantee = ({
  data,
  setData,
  guaranteeToEdit,
  setGuaranteeToEdit,
}) => {
  const [lengthUnit, setLengthUnit] = useState(null);
  const [reInitialValue, setReInitialValue] = useState(null);
  useEffect(() => {
    setReInitialValue({
      title: guaranteeToEdit.title || "",
      descriptions: guaranteeToEdit.descriptions || "",
      length: guaranteeToEdit.length || "",
      length_unit: guaranteeToEdit.length_unit || "",
    });
  }, [guaranteeToEdit]);

  //===================== 📍 handle reset form ==========================
  // const handleResetForm = () => {
  //   document.getElementById("formOfAddGuarantee").reset();
  // };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#add-brand-modal"
      >
        افزودن گارانتی جدید
      </button>

      {/* ================= 📍start modal ================= */}
      <div
        className="modal fade modal-dialog modal-dialog-centered pb-5"
        id="add-brand-modal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            {/* ==============  modal-body ============== */}
            <div className="modal-body ">
              <Formik
                initialValues={reInitialValue || initialValues}
                onSubmit={(values, actions) => {
                  onSubmit(
                    values,
                    actions,
                    setData,
                    guaranteeToEdit,
                    setGuaranteeToEdit,
                    lengthUnit
                  );
                }}
                validationSchema={validationSchema}
                enableReinitialize
              >
                {(formik) => {
                  console.log(formik.values);
                  return (
                    <Form id="formOfAddGuarantee">
                      {/* ==============  modal-header ============= */}
                      <div className="modal-header">
                        <h1 className=" w-100 fs-5" id="staticBackdropLabel">
                          {guaranteeToEdit.id
                            ? `${guaranteeToEdit.title} ویرایش گارانتی`
                            : "افزودن گارانتی جدید"}
                        </h1>
                        {/* =========== ❌ (exit the modal) ========== */}
                        <button
                          type="button"
                          className="btn-close "
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={() => {
                            formik.resetForm();
                            // handleResetForm();
                          }}
                        ></button>
                      </div>
                      {/* ==============  modal-body ============== */}
                      <div className="pt-3">
                        <FormikControl
                          control="input"
                          type="text"
                          name="title"
                          placeholder="عنوان"
                        />

                        <FormikControl
                          control="textArea"
                          type="textArea"
                          name="descriptions"
                          title="توضیحات"
                          placeholder="توضیحات"
                        />
                        <div className="row">
                          <div className="col-7 ">
                            <FormikControl
                              control="input"
                              type="number"
                              name="length"
                              placeholder="مدت گارانتی"
                            />
                          </div>
                          <div className="col-5 d-flex align-items-center">
                            <FormikControl
                              control="radio"
                              type="radio"
                              name="length_unit"
                              placeholder="برحسب:"
                              title="برحسب"
                              label={{ 1: "سال", 2: "ماه" }}
                              lengthUnit={lengthUnit}
                              setLengthUnit={setLengthUnit}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <SubmitBtn id={guaranteeToEdit.id} />
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      {/* ================= 📍end modal ================= */}
    </div>
  );
};
