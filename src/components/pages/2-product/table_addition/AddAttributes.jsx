// import React from "react";
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useState } from "react";
// import { Form, Formik } from "formik";
// import { FormikControl } from "../../../formik/FormikControl_AddItems";
// import { PrevPageBtn } from "../../../general_compo/reusable_operations/PrevPageBtn";
// import { handleGetTypeOfAtt, onSubmit } from "./FormikHelper_AddAtt_products";
// import { SubmitBtn } from "../../../formik/SubmitBtn";
// import { GreenSpinner } from "../../../general_compo/spinners&chips/GreenSpinner";

// export const AddAttributes = () => {
//   const location = useLocation();
//   const [typeAtt, setTypeAtt] = useState();
//   const [Id_product, setId_product] = useState([]);
//   const [isAnyAttr, setIsAnyAttr] = useState();
//   const [isSpinnerOn, setIsSpinnerOn] = useState(true);
//   const [initialValues, setInitialValues] = useState();
//   const [validationSchema, setValidationSchema] = useState({});

//   useEffect(() => {
//     setId_product(location.state.rowData.id);
//   }, [location]);

//   setTimeout(() => {
//     setIsSpinnerOn(false);
//   }, 700);

//   useEffect(() => {
//     handleGetTypeOfAtt(
//       location,
//       setTypeAtt,
//       setInitialValues,
//       setValidationSchema
//     );
//   }, []);

//   useEffect(() => {
//     setIsAnyAttr(typeAtt?.map((item) => item.data)[0]);
//   }, [typeAtt]);

//   //======================== 📍 return =============================
//   return (
//     <div className=" container mt-5">
//       {/* ================= 📍 👇header of page  ==================== */}
//       <div className="header_addProduct p-3 d-flex justify-content-between container ">
//         {/* <span className="d-flex">
//           <h5 className="fw-bold">افزودن ویژگی جدید :</h5>
//           <h5 className="text-primary px-2">{location.state.rowData.title}</h5>
//         </span> */}
//         <PrevPageBtn
//           customStyle="fs-2 text-start text-secondary"
//           returnTitle={<i className="fa-solid fa-xmark"></i>}
//         />
//       </div>
//       {/* ================= 📍 👆header of page  ==================== */}
//       <div className="d-flex justify-content-center">
//         {/* <div className="col-12 col-xxl-7 col-xl-8 col-lg-10">
//           {initialValues ? (
//             <Formik
//               initialValues={initialValues}
//               onSubmit={(values, action) =>
//                 onSubmit(Id_product, values, action)
//               }
//               validationSchema={validationSchema}
//             >
//               {(formik) => {
//                 return (
//                   <div className="">
//                     {isSpinnerOn && !isAnyAttr?.length ? (
//                       <GreenSpinner />
//                     ) : isAnyAttr?.length ? (
//                       <Form>
//                         {typeAtt?.map((item, index) => (
//                           <div className="py-2">
//                             <div className="text-center py-2">
//                               <span className="fs-4"> گروه:</span>
//                               <span className="fs-5">{item.groupTitle} </span>
//                             </div>
//                             {item.data.map((d) => (
//                               <FormikControl
//                                 name={d.id}
//                                 control="typeOfAtt"
//                                 titleOfAttr={d.title}
//                                 unitOfAttr={d.unit}
//                               />
//                             ))}
//                           </div>
//                         ))}

//                         <div className=" text-center pt-4">
//                           <SubmitBtn />
//                         </div>
//                       </Form>
//                     ) : (
//                       <div className="text-center p-5 fs-5 fw-bolder text-primary">
//                         هیچ ویژگی ای برای این محصول ثبت نشده است!...
//                       </div>
//                     )}
//                   </div>
//                 );
//               }}
//             </Formik>
//           ) : (
//             "d"
//           )}
//         </div> */}
//       </div>
//     </div>
//   );
// };


import React from 'react'

export const AddAttributes = () => {
  return (
    <div>
      ss
    </div>
  )
}


