import swal from "sweetalert";
import * as Yup from "yup";
import { loginService } from "../../../../services/authServices";

// ==============  📍initialValues login ===================
export const initialValues = {
  phone: "",
  password: "",
  remember: false,
};

//===============  📍validationSchema login ===============
export const validationSchema = Yup.object({
  phone: Yup.number()
    .typeError("قالب شماره تلفن را رعایت کنید")
    .required("فیلد اجباری"),

  password: Yup.string().required("فیلد اجباری"),
});

//================  📍onSubmit login ======================
export const onSubmit = async (values, submitMethods, navigate) => {
  try {
    const res = await loginService(values, submitMethods);
    if (res.status == 200) {
      //اگر لاگین با موفقیت انجام شد
      // توکن اش رو در لوکال استوریج ذخیره کن
      //و کاربر رو بفرست به صفحه اصلی
      //useNavigate با کمک
      localStorage.setItem("loginToken", JSON.stringify(res.data));
      navigate("/");
    }
  } catch {}
};
