import React from "react";

export const TableOfProducts = () => {
  return (
    <div className="table_of_production pe-5 col-lg-6 col-md-12 col-sm-12">
      <div className="text-center  pb-3 fs-5">محصولات رو به اتمام</div>
      <table className="bg-light productTable table table-bordered border-primary ">
        <thead>
          <tr className="bg-info">
            <td>#</td>
            <td>دسته</td>
            <td>عنوان</td>
            <td>وضعیت</td>
            <td>عملیات</td>
          </tr>
        </thead>
        <tbody>
          <tr className="productTableRow pointer">
            <td>#</td>
            <td>دسته</td>
            <td>عنوان</td>
            <td>وضعیت</td>
            <td>عملیات</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
