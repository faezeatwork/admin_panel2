import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AddItem_btn } from "../../general_compo/add_or_edit_product/AddItem_btn";
import { Form, Formik } from "formik";
import { FormikControl } from "../../formik/FormikControl_AddItems";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "./FormikHelper_roles";
import { SubmitBtn } from "../../formik/SubmitBtn";
import { useEffect } from "react";

export const AddNewRole_modal = ({ rowDataToEdit, permissions }) => {
  const [reInitialize, setReInitialize] = useState(null);

  //============ 📍مقداردهی به فرم درحالت ویرایش نفش ها ===============
  useEffect(() => {
    setReInitialize({
      ...rowDataToEdit,
      permissions: rowDataToEdit?.permissions,
      permissions_id: rowDataToEdit?.permissions.map((p) => `${p.id}`),
    });
  }, [rowDataToEdit]);

  //============ 📍 ریست کردن فرم با هربار زدن دکمه کلوز ==============
  const handleResetForm = () => {
    setReInitialize(null);
  };

  return (
    <div className="">
      {/* <!----- Button trigger modal ➕ icon -----> */}
      <span
        onClick={() => handleResetForm()}
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <AddItem_btn />
      </span>

      {/* <!----------------- Modal ---------------> */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content animate__animated animate__pulse width_modal_roles ">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h5 className="modal-title w-100 mx-5" id="staticBackdropLabel">
                {reInitialize
                  ? "ویرایش نقش" + `"${reInitialize.title}"`
                  : "افزودن نقش جدید"}
              </h5>
              <NavLink to={"/roles"} className="ps-4">
                {/* <!------------ ❌ close btn ------------> */}
                <button
                  id="btn-close-modal-roles"
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => handleResetForm()}
                ></button>
              </NavLink>
            </div>

            <div className="modal-body">
              <Formik
                initialValues={reInitialize || initialValues}
                onSubmit={(values, action) =>
                  onSubmit(values, action, reInitialize)
                }
                validationSchema={validationSchema}
                enableReinitialize
              >
                {(form) => {
                  // console.log(form.values);

                  return (
                    <Form id="formOfRoles">
                      <FormikControl
                        control="input"
                        name="title"
                        title="عنوان نقش"
                        placeholder="فقط حروف فارسی و لاتین"
                      />
                      <FormikControl
                        control="textArea"
                        name="description"
                        title="توضیحات نقش"
                        placeholder="فقط حروف فارسی و لاتین"
                      />
                      {reInitialize ? (
                        <div className="row">
                          <span>دسترسی ها : </span>
                          <span className="text-secondary">
                            {rowDataToEdit?.permissions.map((p) => (
                              <span className="m-2">
                                {`${p.description}`} ،
                              </span>
                            ))}
                          </span>
                        </div>
                      ) : (
                        <FormikControl
                          control="checkbox"
                          name="permissions_id"
                          label="دسترسی ها:"
                          options={permissions}
                        />
                      )}
                      <div className="d-flex justify-content-center">
                        <SubmitBtn id={reInitialize?.id} />
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
