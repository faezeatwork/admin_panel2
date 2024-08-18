import * as Yup from "yup";
import {
  createNewDiscountService,
  updateDiscountService,
} from "../../../services/CRUD_categoryService";
import swal from "sweetalert";
import { ConvertPersianDateToMiladi } from "../../general_compo/utils/ConvertPersianDateToMiladi";
import moment from "jalali-moment";
import { Operation_discounts } from "./Operation_discounts";
import jMoment from "jalali-moment";
// ================  📍header of table ======================
export const handle_header_discountsTable = (
  data,
  setData,
  setDiscountToEdit
) => {
  const header_discountsTable = [
    { field: "id", title: "id" },
    { field: "title", title: "عنوان" },
    { field: "code", title: "کد تخفیف" },
    { field: "percent", title: "درصد تخفیف" },
    {
      field: null,
      title: "وضعیت",
      elements: (rowData) => (rowData.is_active == 1 ? "فعال" : "غیرفعال"),
    },
    {
      field: null,
      title: "تاریخ انقضا",
      elements: (data) =>
        moment(data.created_at).locale("fa").format("YYYY/MM/DD"),
    },
    {
      field: null,
      title: "مربوط به",
      elements: (rowData) => (rowData.for_all ? "همه" : "برخی محصولات"),
    },
    {
      field: null,
      title: "عملیات",
      elements: (rowData) => (
        <Operation_discounts
          rowData={rowData}
          data={data}
          setData={setData}
          setDiscountToEdit={setDiscountToEdit}
        />
      ),
    },
  ];
  return header_discountsTable;
};

//====================== 📍initialValues =====================
export const initialValues = {
  id: "",
  title: "",
  code: "",
  percent: "",
  is_active: "",
  for_all: true,
  expire_at: "",
  product_ids: "",
  chips_product: "",
};
//====================== 📍onSubmit ===========================
export const onSubmit = async (values, action, discountToEdit) => {

  //📍 --------- افزودن یک کد تخفیف جدید ---------👇
  if (Object.keys(discountToEdit).length == 0) {
    const convertValues = {
      ...values,
      expire_at: ConvertPersianDateToMiladi(values.expire_at),
    };
    const res = await createNewDiscountService(convertValues);
    if (res.status == 201) {
  
      swal("ثبت شد!...", res.data.message, "success");
      action.resetForm();
    }

    //📍 ---------ویرایش کد تخفیف موجود ---------👇
  } else {
    const convertValues = {
      ...values,
      expire_at: jMoment(values.expire_at, "jYYYY /jMM/jDD").format("YYYY-M-D"),
    };

    const res = await updateDiscountService(discountToEdit.id, convertValues);
    if (res.status == 200) {
      swal("ثبت شد!...", res.data.message, "success");
    }
  }
};

//====================== 📍validationSchema ===================
export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9@!%-.$?&]+$/,
      "فقط از حروف و اعداد استفاده شود"
    ),
  expire_at: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[0-9/\ \s-]+$/, "فقط ازاعداد و خط تیره استفاده شود"),
  code: Yup.string().required("لطفا این قسمت را پر کنید"),
  // .matches(/^[a-zA-Z0-9\s@!%-.$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
  percent: Yup.number().required("لطفا این قسمت را پر کنید"),
  for_all: Yup.boolean(),
  product_ids: Yup.string().when("for_all", {
    is: false,
    then: () =>
      //مهم ⭐
      //تو ورژن های قبلی لام نبود فانکشنی بنویسیم
      //رو حتما به صورت فانکشن بنویسیم .then اما تو ورژن جدید باید
      Yup.string()
        .required("لطفا این قسمت را پر کنید")
        .matches(/^[0-9\s-]+$/, "فقط ازاعداد و خط تیره استفاده شود"),
  }),
});
