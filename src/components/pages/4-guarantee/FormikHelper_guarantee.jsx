import * as Yup from "yup";
import {
  createNewGuaranteeService,
  updateGuaranteeService,
} from "../../../services/CRUD_categoryService";
import swal from "sweetalert";

//====================== 📍initialValues =====================
export const initialValues = {
  id: "",
  title: "",
  descriptions: "",
  length: "",
  length_unit: "",
};
//====================== 📍onSubmit ===========================
export const onSubmit = async (
  values,
  actions,
  setData,
  guaranteeToEdit,
  setGuaranteeToEdit,
  lengthUnit
) => {
  if (guaranteeToEdit?.length) {
    const newValues = {
      ...values,
      length_unit: lengthUnit,
    };
    const res = await updateGuaranteeService(newValues, guaranteeToEdit.id);
    if (res.status == 200) {
      swal("ثبت شد!", res.data.message, "success");

      setData((oldData) => {
        let newData = [...oldData];
        let index = oldData.findIndex((d) => d.id == guaranteeToEdit.id);
        newData[index] = res.data.data;
        return newData;
      });
      setGuaranteeToEdit(res.data.data);
    }
  } else {
    const newValues = {
      ...values,
      length_unit: lengthUnit,
    };

    const res = await createNewGuaranteeService(newValues);

    if (res.status == 201) {
      setData((data) => [...data, res.data.data]);
      swal("ثبت شد!", res.data.message, "success");
      actions.resetForm();
    }
  }
};

//====================== 📍validationSchema ===================
export const validationSchema = Yup.object({
  title: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9\s@!%$?&]+$/, "فقط از اعداد و حروف لاتین استفاده شود"),

  length: Yup.string(),
  length_unit: Yup.string(),
});
