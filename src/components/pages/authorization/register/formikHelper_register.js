import swal from "sweetalert";
import * as Yup from "yup";
import { registerService } from "../../../../services/authServices";

// ==============  📍initialValues register ===================
export const initialValues = {
  phone: "",
  password: "",
  confirmPassword: "",
};

//===============  📍validationSchema register ===============
export const onSubmit = async () => {
  const res = await registerService();
  try {
    if (res.status == 200) {
      swal(res.data.message);
    }
  } catch {}
};

//================  📍onSubmit register ======================
export const validationSchema = Yup.object({
  phone: Yup.number()
    .typeError("قالب شماره تلفن را رعایت کنید")
    .required("فیلد اجباری"),
  password: Yup.string().required("فیلد اجباری"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "باید مطابق با پسورد باشد"
  ),
});

