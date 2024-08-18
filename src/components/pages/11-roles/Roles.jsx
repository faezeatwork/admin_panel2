import React from "react";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import {
  getAllPermissionsService,
  getAllRolesService,
} from "../../../services/CRUD_categoryService";
import { useEffect } from "react";
import { useState } from "react";
import { Reusable_table } from "../../general_compo/reusable_table/reusable_table1/Reusable_table";
import { Operation_roles } from "./Operation_roles";
import { AddNewRole_modal } from "./AddNewRole_modal";

export const Roles = () => {
  const [data, setData] = useState([]);
  const [rowDataToEdit, setRowDataToEdit] = useState();
  const [forceRender, setForceRender] = useState(1);
  const [permissions, setPermissions] = useState([]);

  //================= 👇 table header =========================
  const handle_header_roles = (setRowDataToEdit) => {
    const header_roles = [
      { field: "id", title: "id" },
      { field: "title", title: "عنوان" },
      { field: "description", title: "توضیحات" },
      {
        field: null,
        title: "عملیات",
        elements: (rowData) => (
          <Operation_roles
            rowData={rowData}
            data={data}
            setData={setData}
            permissions={permissions}
            setRowDataToEdit={setRowDataToEdit}
          />
        ),
      },
    ];

    return header_roles;
  };

  //================= 👇 گرفتن همه نقش ها ====================
  const handleGetAllRoles = async () => {
    const res = await getAllRolesService();
    setData(res.data.data);
  };
  useEffect(() => {
    handleGetAllRoles();
  }, [forceRender]);
  //============== 👇 گرفتن همه دسترسی ها ===================
  const handleGetAllPermissions = async () => {
    const res = await getAllPermissionsService();
    const permis = res.data.data.map((p) => ({
      id: p.id,
      title: p.description,
    }));
    setPermissions(permis);
  };
  useEffect(() => {
    handleGetAllPermissions();
  }, []);
  //=================== 👇 force render table =================
  useEffect(() => {
    document
      .getElementById("btn-close-modal-roles")
      .addEventListener("click", () => {
        setForceRender((i) => i + 1);
      });
  }, []);

  return (
    <>
      <div className="px-4 productGroupManagement">
        <UpperPartPages title="مدیریت نقش ها" />
        <Reusable_table
          nameOfColumn={handle_header_roles(setRowDataToEdit)}
          dataOfRows={data}
          placeholder_searchBox="قسمتی از عنوان را وارد کنید"
          having_searchBox={true}
          modal_addButton={true}
          modal_compo={
            <AddNewRole_modal
              rowDataToEdit={rowDataToEdit}
              permissions={permissions}
            />
          }
        />
      </div>
    </>
  );
};
