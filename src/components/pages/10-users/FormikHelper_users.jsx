import swal from "sweetalert";
import {
  createNewUserService,
  updateUserService,
} from "../../../services/CRUD_categoryService";
import { Operation_users } from "./Operation_users";
import moment from "jalali-moment";
import * as Yup from "yup";

// =====================  📍header of table ========================
export const header_userTable = (data, setData) => {
  const header = [
    { field: "id", title: "id" },
    { field: "title", title: "نام و نام خانوادگی" },
    { field: "phone", title: "موبایل" },
    { field: "email", title: "ایمیل" },
    { field: "roles_id", title: "نقش" },
    {
      title: "چنسیت",
      elements: (rowData) => {
        const gender = rowData.gender == 2 ? "آقا" : "خانم";
        console.log(data);
        console.log(rowData);
        console.log(rowData.gender);
        return gender;
      },
    },
    {
      title: "تاریخ ثبت نام",
      elements: (rowData) =>
        moment(rowData.created_at).locale("fa").format("YYYY/M/D"),
    },
    {
      title: "عملیات",
      elements: (rowData) => Operation_users(rowData, data, setData),
    },
  ];

  return header;
};

//=========================== 📍initialValues ========================
export const initialValues = {
  user_name: "",
  first_name: "",
  last_name: "",
  national_code: "",
  phone: "",
  email: "",
  password: "",
  birth_date: "",
  gender: 1,
  roles_id: [],
};
//=========================== 📍onSubmit ==============================
export const onsubmit = async (
  value,
  action,
  setRoles_chips,
  reInitialize,
  setReInitialize,
  gender
) => {
  // console.log("entry submit");
  // console.log(value);
  console.log(action);
  const newValues = {
    ...value,
    gender,
  };

  console.log(newValues);
  console.log(gender);
  if (reInitialize?.user_name) {
    console.log("ویرایش کاربر ");
    //ویرایش کاربر ⭐
    const editValues = {
      ...value,
      gender,
      roles_id: value.roles.map((role) => role.id),
    };
    const res = await updateUserService(reInitialize.id, editValues);
    console.log(res);
    if (res.status == 200) {
      swal("اعمال تغییرات!...", res.data.message, "success");
    }
  } else {
    console.log("کاربر جدید ");
    //افزودن کاربر جدید ⭐
    const res = await createNewUserService(newValues);
    // console.log(res);
    if (res.status == 201) {
      swal("ثبت شد!...", res.data.message, "success");
    }
  }
  // setRoles_chips([]);
};
//=========================== 📍validationSchema ========================
export const validationSchema = (reInitialize) => {
  return Yup.object({
    user_name: Yup.string()
      .required("فیلد اجباری")
      .matches(
        /^[a-zA-Z0-9\s@!%$?&]+$/,
        "فقط از اعداد و حروف لاتین استفاده شود"
      ),
    first_name: Yup.string()
      .required("فیلد اجباری")
      .matches(/^[آ-یa-zA-Z]+$/, "فقط حروف لاتین یا فارسی"),
    last_name: Yup.string()
      .required("فیلد اجباری")
      .matches(/^[آ-یa-zA-Z\s*]+$/, "فقط حروف لاتین یا فارسی"),
    national_code: Yup.string()
      .required("فیلد اجباری")
      .matches(/^[0-9]+$/, "فقط عدد"),
    phone: Yup.string()
      .required("فیلد اجباری")
      .matches(
        /((0?9)|(\+?989))\d{2}\W?\d{3}\W?\d{4}/g,
        "فرمت تلفن همراه رعایت نشده است."
      ),
    email: Yup.string()
      .notRequired()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "فرمت ایمیل را رعایت کنید"),
    password: reInitialize.user_name
      ? null
      : Yup.string().required("فیلد اجباری"),
    // roles_id: Yup.array().of(Yup.string()).required("فیلد اجباری"),
  });
};
