import * as Yup from "yup";
import {
  createNewCategoryService,
  getCategoriesService,
  updateCategoryService,
} from "../../services/CRUD_categoryService";
import swal from "sweetalert";
import { ConvertDataToFormData } from "../general_compo/utils/ConvertDataToFormData";

export const handleGetParentsCategories = async (setParents) => {
  try {
    const res = await getCategoriesService();
    if (res.status == 200) {
      const allParents = res.data.data;
      setParents(allParents.map((d) => ({ id: d.id, value: d.title })));
    }
  } catch {}
};

//====================== 📍initialValues =====================
export const initialValues = {
  title: "",
  descriptions: "",
  parent_id: "",
  is_active: false,
  show_in_menu: true,
  image: "",
};

//====================== 📍onSubmit ===========================

export const onSubmit = async (values, actions, categoryId, formik) => {
  if (categoryId) {
    values = {
      ...values,
      is_active: values.is_active ? 1 : 0,
      show_in_menu: values.show_in_menu ? 1 : 0,
    };
    const res = await updateCategoryService(values, categoryId);
    if (res.status == 200) {
      swal("رکورد ثبت شد", res.data.message, "success");
    }
  } else {
    values = {
      ...values,
      is_active: values.is_active ? 1 : 0,
      show_in_menu: values.show_in_menu ? 1 : 0,
    };
    const convertValue = values.image ? ConvertDataToFormData(values) : values;
    console.log(values);
    const res = await createNewCategoryService(convertValue);
    if (res.status == 201) {
      swal("رکورد ثبت شد", res.data.message, "success");
      actions.resetForm();
    } else {
    }
  }
};

//====================== 📍validationSchema ===================
export const validationSchema = Yup.object({
  parent_id: Yup.number(),

  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),

  descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "فقط از حروف و اعداد استفاده شود"
  ),

  // image: Yup.mixed()
  //   .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
  //     !value ? true : value.size <= 500 * 1024
  //   )
  //   .test("format", "فرمت فایل باید jpg باشد", (value) =>
  //     !value ? true : value.type === "image/jpeg"
  //   ),

  is_active: Yup.boolean(),
  show_in_menu: Yup.boolean(),
});
