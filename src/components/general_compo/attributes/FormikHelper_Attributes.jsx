import * as Yup from "yup";
import {
  createNewAttributeService,
  updateAttributeService,
} from "../../../services/CRUD_categoryService";
import swal from "sweetalert";

// ==============  📍header of table in add attributes ===================
export const headers_attributesTable = [
  { field: "id", title: "id" },
  { field: "title", title: "عنوان ویژگی" },
  { field: "unit", title: "واحد" },
  { field: "in_filter", title: "نمایش در فیلتر" },
];

// ==============  📍initialValues add attributes ===================
export const initialValues = {
  attributeTitle: "",
  attributeUnit: "",
  switchShowFilter: false,
};

//================  📍onSubmit add attributes ======================
export const onSubmit = async (
  values,
  actions,
  location,
  setAttData,
  getAttToEdit,
  setGetAttToEdit,
  attData
) => {
  if (getAttToEdit) {
    //ویرایش یک ویژگی 📍
    values = {
      ...values,
      switchShowFilter: values.switchShowFilter ? 1 : 0,
    };
    const res = await updateAttributeService(getAttToEdit.attributeId, values);
    console.log(res);
    try {
      if (res.status == 200) {
        swal("", res.data.message, "success");
        setAttData((oldData) => {
          const newData = [...oldData];
          const index = newData.findIndex(
            (d) => d.id == getAttToEdit.attributeId
          );
          newData[index] = res.data.data;
          return newData;
        });
        setGetAttToEdit(null);
      }
    } catch {}
  } else {
    //افزودن یک ویژگی جدید📍
    values = {
      ...values,
      switchShowFilter: values.switchShowFilter ? 1 : 0,
    };
    const res = await createNewAttributeService(
      location.state?.categoryId,
      values
    );
    console.log(res.data.data);
    try {
      if (res.status == 201) {
        swal("", res.data.message, "success");
        setAttData((oldData) => [...oldData, res.data.data]); //این خط چیکار میکنه؟ جدول ویژگی هارو رندر مجدد میکنه 😁
        actions.resetForm();
      }
    } catch {}
  }
};

//===============  📍validationSchema add attributes ===============
export const validationSchema = Yup.object({
  attributeTitle: Yup.string().required("لطفا این قسمت را پر کنید"),
  attributeUnit: Yup.string().required("لطفا این قسمت را پر کنید"),
});
