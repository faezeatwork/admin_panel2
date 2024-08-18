import React, { useEffect, useState } from "react";
import { getAllUsersService } from "../../../services/CRUD_categoryService";
import { Reusable_table } from "../../general_compo/reusable_table/reusable_table1/Reusable_table";
import { UpperPartPages } from "../../general_compo/reusable_operations/UpperPartPages";
import { header_userTable } from "./FormikHelper_users";

export const Users = () => {
  const [data, setData] = useState([]);
  const handleGetAllUsers = async () => {
    const res = await getAllUsersService();
    if (res.status == 200) {
      console.log(res.data.data.map((d) => d.roles.map((role) => role.title)));
      const data = res.data.data;
      const mergeData = data.map((d) => ({
        title: d.first_name + " " + d.last_name,
        roles_id: d.roles.map((role) => role.title).join(" - "),
        ...d,
      }));
      setData(mergeData);
    }
  };

  useEffect(() => {
    handleGetAllUsers();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="px-4">
      <UpperPartPages title="مدیریت کاربران" />
      <div className="pt-5">
        <Reusable_table
          nameOfColumn={header_userTable(data, setData)}
          dataOfRows={data}
          having_searchBox={true}
          show_addButton={true}
          go_where="/add-user"
          placeholder_searchBox="قسمتی از نام یا نام خانوادگی..."
        />
      </div>
    </div>
  );
};
