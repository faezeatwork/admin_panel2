import * as Yup from "yup";
import {
  createNewAttrForProductService,
  getAttributesService,
} from "../../../../services/CRUD_categoryService";
import swal from "sweetalert";

//============= گرفتن تایپ ویژگی ها از محصول والد =============
export const handleGetTypeOfAtt = async (
  location,
  setTypeAtt,
  setInitialValues,
  setValidationSchema
) => {
  let attrVar = [];
  let initials = {};
  let rules = {};
  let pivots = location.state.rowData.attributes.map((attr) => attr.pivot);
  const values = pivots.map((p) => {
    return { id: p.property_id, value: p.value };
  });
  Promise.all(
    location.state.rowData.categories.map(async (cat) => {
      const res = await getAttributesService(cat.id);
      if (res.status == 200) {
        attrVar = [...attrVar, { groupTitle: cat.title, data: res.data.data }];
        if (res.data.data.length > 0) {
          for (const d of res.data.data) {
            const reInitialValue = values.filter((v) => v.id == d.id);

            initials = {
              ...initials,
              [d.id]: reInitialValue[0].value || "",
            };
            rules = { ...rules, [d.id]: Yup.string() };
          }
        }
      }
    })
  ).then(() => {
    setTypeAtt(attrVar);
    setInitialValues(initials);

    setValidationSchema(
      Object.keys(initials).length > 0 ? Yup.object(rules) : {}
    );
  });
};
//چون مقدار اولیه ها و
//validationSchema
//در این صفحه متغیر است
// برای همین به این شکل
// نوشته شده است
//====================== 📍onSubmit ===========================
export const onSubmit = async (Id_product, values, action) => {
  let data = {};
  for (const key in values) {
    if (values[key]) data = { ...data, [key]: { value: values[key] } };
  }
  const res = await createNewAttrForProductService(Id_product, data);

  if (res.status == 200) {
    swal("ثبت شد!", res.data.message, "success");
  }
};
