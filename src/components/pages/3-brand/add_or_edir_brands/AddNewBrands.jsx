import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { FormikControl } from "../../../formik/FormikControl_AddItems";
import { SubmitBtn } from "../../../formik/SubmitBtn";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "../FormikHelper_brands";
import { apiPath } from "../../../../services/httpService";

export const AddNewBrands = ({
  data,
  setData,
  brandToEdit,
  setBrandToEdit,
}) => {
  const brandId = brandToEdit?.id;
  const [reInitialValues, setReInitialValues] = useState(null);

  useEffect(() => {
    if (brandToEdit) {
      setReInitialValues({
        original_name: brandToEdit.original_name,
        persian_name: brandToEdit.persian_name || "",
        descriptions: brandToEdit.descriptions || "",
        logo: null,
      });
    } else setReInitialValues(null);
  }, [brandToEdit]);

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#add-brand-modal"
      >
        افزودن برند جدید
      </button>

      {/* ================= 📍start modal ================= */}
      <div
        className="modal fade modal-dialog modal-dialog-centered"
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
                initialValues={reInitialValues || initialValues}
                onSubmit={(values, actions) => {
                  onSubmit(
                    values,
                    actions,
                    data,
                    setData,
                    brandToEdit,
                    setBrandToEdit,
              
                  );
                }}
                validationSchema={validationSchema}
                enableReinitialize
              >
                {(formik) => {
                  return (
                    <Form>
                      {/* ==============  modal-header ============= */}
                      <div className="modal-header">
                        <h1 className=" w-100 fs-5" id="staticBackdropLabel">
                          {brandToEdit
                            ? `ویرایش برند ${brandToEdit.original_name}`
                            : "افزودن برند جدید"}
                        </h1>
                        {/* =========== ❌ (exit the modal) ========== */}
                        <button
                          type="button"
                          className="btn-close "
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          onClick={() => {
                            formik.resetForm();
                            setBrandToEdit(null);
                          }}
                        ></button>
                      </div>
                      {/* ==============  modal-body ============== */}
                      <div className="pt-3">
                        <FormikControl
                          control="input"
                          type="text"
                          name="original_name"
                          placeholder="عنوان لاتین"
                        />

                        <FormikControl
                          control="input"
                          type="text"
                          name="persian_name"
                          placeholder="عنوان فارسی"
                        />

                        <FormikControl
                          control="textArea"
                          type="text"
                          name="descriptions"
                          title="توضیحات"
                          placeholder="توضیحات"
                        />

                        <FormikControl
                          formik={formik}
                          control="addFile"
                          type="text"
                          label="تصویر"
                          name="logo"
                          placeholder="برای افزودن تصویر اینجا کلیک کنید"
                        />
                        {brandToEdit ? (
                          <img
                            className="col-6"
                            src={apiPath + brandToEdit.logo}
                            alt={`${brandToEdit.original_name} logo`}
                            width="50"
                          />
                        ) : null}
                      </div>
                      <div className="text-center">
                        <SubmitBtn brandId={brandId} />
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
