import React, { useEffect, useState } from "react";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import { getAllPermissionsService } from "../../../services/CRUD_categoryService";
import { Reusable_table } from "../../general_compo/reusable_table/reusable_table1/Reusable_table";

export const Permissions = () => {
  const [data, setData] = useState([]);
  //================ 👇گرفتن همه مجوزها 📍 ====================
  const handleGetAllPermissions = async () => {
    const res = await getAllPermissionsService();
    setData(res.data.data);
  };
  useEffect(() => {
    handleGetAllPermissions();
  }, []);

  //=================== 👇 table headers =======================
  const header_Permissions = [
    { field: "id", title: "id" },
    { field: "title", title: "عنوان" },
    { field: "description", title: "توضیحات" },
    { field: "category", title: "عنوان دسته" },
  ];
  // ======================= 👇return ==========================
  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت مجوزهای دسترسی" />
        <Reusable_table nameOfColumn={header_Permissions} dataOfRows={data} />
      </div>
    </>
  );
};
