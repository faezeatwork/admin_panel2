import React from "react";
import { useLocation } from "react-router-dom";
import { FormikAddItems } from "../../formik/FormikAddItems";
import { PrevPageBtn } from "../reusable_operations/PrevPageBtn";

export const AddCompo = (props) => {
  const location = useLocation();
  const { title, hidden_compo } = props;



  
  return (
    <div
      className={`addProduct position-relative ${hidden_compo ? "d-none" : ""}`}
      id="compo_for_add_items"
    >
      <div className="header_addProduct p-3 d-flex justify-content-between container">
        {location.state?.editState?.rowData?.id ? (
          <h5>ویرایش محصول {location.state?.editState?.rowData.title}</h5>
        ) : (
          <h5>{title}</h5>
        )}

        {/* ================  in icon ❌  ================ */}
        <PrevPageBtn
          customStyle="fs-2 text-start text-secondary"
          returnTitle={<i className="fa-solid fa-xmark"></i>}
        />
      </div>
      {/* ================  formik inputs  ================ */}
      <div className=" d-flex p-3 justify-content-center row">
        <div className=" col-lg-5">
          <FormikAddItems categoryId={location.state?.editState?.rowData?.id} />
        </div>
      </div>
    </div>
  );
};
