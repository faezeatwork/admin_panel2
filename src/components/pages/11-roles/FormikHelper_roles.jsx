import * as Yup from "yup";
import {
  createNewRoleService,
  updateRoleService,
} from "../../../services/CRUD_categoryService";
import swal from "sweetalert";

//====================== 📍initialValues =====================
export const initialValues = {
  id: "",
  title: "",
  description: "",
  permissions_id: [],
  // permissions: [],
};

//====================== 📍onSubmit ===========================
export const onSubmit = async (values, actions, reInitialize) => {
  if (reInitialize) {
    //------- ⭐ ویرایش یکی از نقش ها ---------
    const res = await updateRoleService(reInitialize.id, values);
    console.log(res);
    if (res.status == 200) {
      swal("ویرایش شد", res.data.message, "success");
      console.log(res.data);
    }
  } else {
    // -------- ⭐ افزودن یک نقش جدید ----------
    const res = await createNewRoleService(values);
    if (res.status == 201) {
      console.log(res.data);
      swal("ثبت شد", res.data.message, "success");
      actions.resetForm();
    }
  }
};

//====================== 📍validationSchema ===================
export const validationSchema = Yup.object({
  title: Yup.string()
    .required("فیلد الزامی")
    .matches(
      /^[A-Za-z\u0600-\u06FF\s]+$/,
      "فقط از حروف فارسی یا لاتین استفاده شود"
    ),
  description: Yup.string()
    .required("فیلد الزامی")
    .matches(
      /^[A-Za-z\u0600-\u06FF\s]+$/,
      "فقط از حروف فارسی یا لاتین استفاده شود"
    ),
  permissions_id: Yup.array().min(1, "حداقل یکی از دسترسی ها باید انتخاب شود"),
});
