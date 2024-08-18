import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { FormControl } from "../../pages/authorization/FormControl_Auth";
import { SubmitBtn } from "../../formik/SubmitBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { getAttributesService } from "../../../services/CRUD_categoryService";
import { Operations_attributes } from "./Operations_attributes";
import {
  headers_attributesTable,
  initialValues,
  onSubmit,
  validationSchema,
} from "./FormikHelper_Attributes";
import { Reusable_table } from "../reusable_table/reusable_table1/Reusable_table";

export const AddAttribute = () => {
  const location = useLocation(); //from Operations_product compo
  const [attData, setAttData] = useState([]);
  const [getAttToEdit, setGetAttToEdit] = useState(null);
  const navigate = useNavigate();

  //=====📍گرفتن ویژگی های یک محصول برای نشاندن در جدول ========
  const handleGetAttributes = async () => {
    const res = await getAttributesService(location.state?.categoryId);
    try {
      setAttData(res.data.data);
    } catch {}
  };

  useEffect(() => {
    handleGetAttributes();
  }, [getAttToEdit]);

  // ========== 📍additionField for add attributes ==============
  const additionField = [
    {
      title: "عملیات",
      elements: (rowData) => (
        <Operations_attributes
          rowData={rowData}
          data={attData}
          setData={setAttData}
          getAttToEdit={getAttToEdit}
          setGetAttToEdit={setGetAttToEdit}
        />
      ),
    },
  ];

  //======================= return ===========================
  useEffect(() => {}, []);
  return (
    <div className="container p-2">
      <div className="row justify-content-center">
        <Formik
          initialValues={getAttToEdit || initialValues} //ترتیبش مهمه 😐
          enableReinitialize
          onSubmit={(values, form) =>
            onSubmit(
              values,
              form,
              location,
              setAttData,
              getAttToEdit,
              setGetAttToEdit,
              attData
            )
          }
          validationSchema={validationSchema}
        >
          <Form>
            <div
              className="text-start"
              onClick={() =>
                navigate(
                  `/product-group-management/${location.state?.parentId}`,
                  { state: location.state }
                )
              }
            >
              <i className="fa-solid fa-xmark fs-2 text-secondary"></i>
            </div>
            <div
              className={`text-center fs-4 ${getAttToEdit ? "d-none" : null}`}
            >
              افزودن ویژگی جدید
            </div>
            <div
              className={`row ${
                getAttToEdit
                  ? "edit_attribute_box"
                  : "cancel_edit_attribute_box"
              }`}
            >
              <div
                className={`fs-5 text-center ${getAttToEdit ? null : "d-none"}`}
              >
                ویرایش ویژگی : {getAttToEdit?.attributeTitle}
              </div>
              <div className=" col-md-6 col-lg-4 my-1">
                <FormControl
                  control="input"
                  type="text"
                  name="attributeTitle"
                  placeholder="عنوان ویژگی جدید"
                  errMs="لطفا این قسمت را پر کنید"
                />
              </div>

              <div className="col-md-6 col-lg-4 my-1">
                <FormControl
                  control="input"
                  type="text"
                  name="attributeUnit"
                  placeholder="واحد ویژگی جدید"
                  errMs="لطفا این قسمت را پر کنید"
                />
              </div>
              <div className="col-md-6 col-lg-3 my-1 d-flex justify-content-around">
                <FormControl
                  //form={form}
                  control="switch"
                  label="نمایش در فیلتر"
                  name="switchShowFilter"
                  getAttToEdit={getAttToEdit}
                />
                <div className="mt-3 d-flex">
                  <SubmitBtn getAttToEdit={getAttToEdit} />
                  {getAttToEdit ? (
                    <button
                      className="btn btn-secondary m-2"
                      onClick={() => setGetAttToEdit(null)}
                    >
                      انصراف
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </Form>
        </Formik>
        <hr />
        <Reusable_table
          nameOfColumn={headers_attributesTable}
          dataOfRows={attData}
          having_searchBox={true}
          placeholder_searchBox="قسمتی از عنوان را وارد کنید"
          additionField={additionField}
          show_subset_icon={false}
        />
      </div>
    </div>
  );
};
