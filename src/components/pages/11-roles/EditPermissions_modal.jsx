import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { FormikControl } from "../../formik/FormikControl_AddItems";
import { SubmitBtn } from "../../formik/SubmitBtn";
import { updatePermissionsOfRole } from "../../../services/CRUD_categoryService";
import swal from "sweetalert";

export const EditPermissions_modal = ({ permissions, data }) => {
  const [permissionsId, setPermissionsId] = useState([]);
  const [permissionInfo, setPermissionInfo] = useState([]);
  const initialValues = {
    permissions_id: [],
  };
  const onSubmit = async () => {
    console.log(data.id);
    const res = await updatePermissionsOfRole(data.id, permissionsId);
    if (res.status == 200) {
      swal("ثبت شد", res.data.message, "success");
      console.log(res);
      console.log(res.data.data);
      // console.log(res.data.data.permissions.map((p)=>p.id));
      console.log(permissionsId);
      // setPermissionsId(res.data.data.permissions.map((p)=>p.id))
    }
  };

  useEffect(() => {
    // console.log(data);
    console.log(permissionInfo);
  }, []);

  const handleResetForm = () => {
    console.log("reset");
  };

  return (
    <div>
      {/* <!------------ Button trigger modal --------------> */}
      <i
        id="edit_permission_modal"
        title="ویرایش دسته بندی ها"
        className="mx-2 pointer fa-solid fa-fingerprint text-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop2"
        onClick={() => {
          console.log(data);
          setPermissionInfo(data);
        }}
      ></i>
      {/* <!------------------ Modal --------------------> */}
      <div
        className="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <div className="modal-title w-100 mx-5" id="staticBackdropLabel">
                <h5>ویرایش دسته بندی های</h5>
                <span className="text-secondary">{permissionInfo.title}</span>
              </div>

              {/* <!--------------- ❌ close btn ---------------> */}
              <button
                id="btn-close-modal-discount"
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => handleResetForm()}
              ></button>
            </div>
            <div className="modal-body">
              <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {(form) => {
                  setPermissionsId(form.values);
                  return (
                    <Form id="formOfPermissions">
                      <FormikControl
                        control="checkbox"
                        name="permissions_id"
                        label="دسترسی ها:"
                        options={permissions}
                        options2={data.permissions}
                      />
                      <div className="d-flex justify-content-center">
                        <SubmitBtn />
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </div>
            <div className="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
