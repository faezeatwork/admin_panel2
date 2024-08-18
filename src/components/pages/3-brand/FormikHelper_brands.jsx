import * as Yup from "yup";
import {
  createNewBrandService,
  updateBrandService,
} from "../../../services/CRUD_categoryService";
import swal from "sweetalert";
import { useEffect } from "react";

//====================== 📍initialValues =====================
export const initialValues = {
  original_name: "",
  persian_name: "",
  descriptions: "",
  logo: null,
};

//====================== 📍onSubmit ===========================
export const onSubmit = async (
  data,
  actions,
  tableData,
  setTableData,
  brandToEdit,
  setBrandToEdit,

) => {
  if (brandToEdit) {
    const res = await updateBrandService(brandToEdit.id,  data);
    if (res.status == 200) {
      swal("اعمال شد", res.data.message, "success");
      setTableData((lastData) => {
        let newData = [...lastData];
        let index = newData.findIndex((d) => d.id == brandToEdit.id);
        newData[index] = res.data.data;
        return newData;
      });
      setBrandToEdit(res.data.data)
      actions.resetForm();
    } else {
      actions.resetForm();
    }
  } else {
    const res = await createNewBrandService(data);
    if (res.status == 201) {
      swal("ثبت شد", res.data.message, "success");
      setTableData([...tableData, res.data.data]);
      actions.resetForm();
    } else {
      actions.resetForm();
    }
  }
};

//====================== 📍validationSchema ===================
export const validationSchema = Yup.object({
  original_name: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9\s@!%$?&]+$/, "فقط از اعداد و حروف لاتین استفاده شود"),
  persian_name: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "فقط از اعداد و حروف استفاده شود"
  ),
  descriptions: Yup.string().matches(
    /^[\u0600-\u06FF\sa-zA-Z0-9@!%$?&]+$/,
    "فقط از اعداد و حروف استفاده شود"
  ),
  logo: Yup.mixed()
    .test("filesize", "حجم فایل نمیتواند بیشتر 500 کیلوبایت باشد", (value) =>
      !value ? true : value.size <= 500 * 1024
    )
    .test("format", "فرمت فایل باید jpg باشد", (value) =>
      !value ? true : value.type === "image/jpeg" || value.type === "image/png"
    )
    .nullable(),
});
