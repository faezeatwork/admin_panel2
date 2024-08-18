import { Formik, Form } from "formik";
import React, { useContext } from "react";
import { FormikControl } from "./FormikControl_AddItems";
import { useEffect } from "react";
import { useState } from "react";
import {
  initialValues,
  onSubmit,
  validationSchema,
} from "./FormikHelper_AddItems";
import { SubmitBtn } from "./SubmitBtn";
import {
  getCategoriesService,
  getSingleCategoryService,
} from "../../services/CRUD_categoryService";

//===================================================
export const FormikAddItems = ({ categoryId }) => {
  // const params = useParams();
  const [parents, setParents] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [reInitialValues, setReInitialValues] = useState(null);

  //================  این لیست والدها رو میگیره 👇 ===============
  const handleGetParentsCategories = async () => {
    try {
      const res = await getCategoriesService();
      if (res.status == 200) {
        const allParents = res.data.data;
        setParents(
          allParents.map((p) => {
            return { id: p.id, value: p.title };
          })
        );
      }
    } catch (error) {}
  };
  useEffect(() => {
    handleGetParentsCategories();
  }, []);

  //=============== این اطلاعات مربوط به هر محصول رو میگیره 👇 ===============
  const handleGetSingleCategory = async () => {
    try {
      const res = await getSingleCategoryService(categoryId);
      if (res.status == 200) {
        const oldInfo = res.data.data;
        setEditCategory(oldInfo);
      }
    } catch (error) {}
  };
  useEffect(() => {
    categoryId ? handleGetSingleCategory() : setEditCategory(null);
  }, [categoryId]);

  //=================== این داده هارو میشونه تو اینپوت ها 👇 ==================

  useEffect(() => {
    if (editCategory) {
      setReInitialValues({
        parent_id: editCategory.parent_id || "",
        title: editCategory.title,
        descriptions: editCategory.descriptions,
        image: null,
        is_active: editCategory.is_active ? true : false,
        show_in_menu: editCategory.show_in_menu ? true : false,
      });
    } else if (categoryId) {
      setReInitialValues({
        ...initialValues,
        parent_id: categoryId,
      });
    } else {
      setReInitialValues(null);
    }
  }, [categoryId, editCategory]);

  //====================== return ====================

  return (
    <Formik
      initialValues={reInitialValues || initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions, categoryId)}
      validationSchema={validationSchema}
      enableReinitialize
    >
      {(formik) => {
        // console.log(formik.values);
        return (
          <Form>
            {parents.length > 0 ? (
              <FormikControl
                formik={formik}
                control="select"
                type="select"
                name="parent_id"
                label="دسته والد"
                option={parents}
              />
            ) : null}

            <FormikControl
              formik={formik}
              control="input"
              type="text"
              name="title"
              placeholder="عنوان"
              inputStyle="registerInputStyle"
            />
            <FormikControl
              formik={formik}
              control="textArea"
              type="text"
              name="descriptions"
              title="توضیحات"
              placeholder="توضیحات"
            />
            <FormikControl
              formik={formik}
              control="addFile"
              type="text"
              name="image"
              label="تصویر"
              placeholder="برای انتخاب تصویر خود کلیک کنید."
            />
            <div className="d-flex justify-content-evenly">
              <FormikControl
                control="switchCheckbox"
                name="is_active"
                label="وضعیت فعال"
              />

              <FormikControl
                control="switchCheckbox"
                name="show_in_menu"
                label="نمایش در منو"
              />
            </div>
            <div className=" text-center pt-4">
              <SubmitBtn categoryId={categoryId} />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
