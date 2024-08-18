import { Form, Formik, From } from "formik";
import React, { useEffect, useState } from "react";
import { FormikControl } from "../../formik/FormikControl_AddItems";
import { PrevPageBtn } from "../../general_compo/reusable_operations/PrevPageBtn";
import { SubmitBtn } from "../../formik/SubmitBtn";
import {
  initialValues,
  onsubmit,
  validationSchema,
} from "./FormikHelper_users";
import { getAllRolesService } from "../../../services/CRUD_categoryService";
import { useLocation } from "react-router-dom";

export const AddEditUser = () => {
  const [roles, setRoles] = useState([]);
  const [roles_chips, setRoles_chips] = useState([]);
  const [reInitialize, setReInitialize] = useState([]);
  const [gender, setGender] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setReInitialize({
      ...location.state?.rowData,
    });
    console.log(reInitialize);
    setRoles_chips(
      location.state?.rowData.roles.map((i) => ({
        id: `${i.id}`,
        value: `${i.title}`,
      }))
    );
  }, [location]);

  {
    /* ====== 📍 get all roles for roles_id 👇 ====== */
  }
  const handleGetAllRoles = async () => {
    const res = await getAllRolesService();
    if (typeof res.data.data == "object") {
      for (const key in res.data.data) {
        setRoles((oldData) => [
          ...oldData,
          { id: res.data.data[key].id, value: res.data.data[key].title },
        ]);
      }
    }
  };
  useEffect(() => {
    handleGetAllRoles();
  }, []);
  return (
    <div>
      {/* ================= 📍 header of page  ==================== */}
      <div className="header_addProduct p-3 d-flex justify-content-between container">
        <h5>
          {location.state
            ? `ویرایش کاربر : ${location.state.rowData.user_name}`
            : "افزودن کاربر جدید"}
        </h5>
        {/*👇 icon ❌  رفتن به صفحه قبلی*/}
        <PrevPageBtn
          customStyle="fs-2 text-start text-secondary"
          returnTitle={<i className="fa-solid fa-xmark"></i>}
        />
      </div>

      {/* =================== 📍 start form  ======================= */}
      <div className="container col-lg-8 col-xl-7 col-xxl-5 ">
        <Formik
          initialValues={reInitialize || initialValues}
          enableReinitialize
          validationSchema={() => validationSchema(reInitialize)}
          onSubmit={(value, action) =>
            onsubmit(value, action, setRoles_chips, reInitialize,setReInitialize, gender)
          }
        >
          {(form) => {
            console.log(form.values);
            console.log(reInitialize.gender);
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  name="user_name"
                  placeholder="نام کاربری"
                  mandatory={true}
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="first_name"
                  placeholder="نام"
                  mandatory={true}
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="last_name"
                  placeholder="نام خانوادگی"
                  mandatory={true}
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="national_code"
                  placeholder="کدملی"
                  mandatory={true}
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="phone"
                  placeholder="شماره موبایل"
                  mandatory={true}
                />

                <FormikControl
                  control="persianDate"
                  formik={form}
                  name="expire_at"
                  label="تاریخ تولد"
                  yearsLimit={{ from: 80, to: 0 }}
                  // initialDate={discountToEdit?.expire_at || undefined}
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="email"
                  title="ایمیل"
                  placeholder="ایمیل"
                />

                {reInitialize.user_name ? null : (
                  <FormikControl
                    control="input"
                    type="text"
                    name="password"
                    placeholder="کلمه عبور"
                    mandatory={true}
                  />
                )}
                <FormikControl
                  control="multiSelect"
                  type="text"
                  name="roles_id"
                  label="سمت شغلی"
                  option={roles}
                  chips={roles_chips}
                  setChips={setRoles_chips}
                  mandatory={true}
                />
                <div className="d-flex justify-content-center">
                  <FormikControl
                    control="radio"
                    type="text"
                    name="gender"
                    placeholder="جنسیت"
                    title="چنسیت"
                    label={{ 1: "زن", 2: "مرد" }}
                    lengthUnit={gender}
                    setLengthUnit={setGender}
                    reInitialValue={reInitialize.gender}
                  />
                </div>

                <div className="text-center">
                  <SubmitBtn id={form.values.id} />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
