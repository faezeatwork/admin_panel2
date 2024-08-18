import React, { useEffect } from "react";
import { Login } from "../../../pages/authorization/login/Login";
import { Navigate } from "react-router-dom";

export const Exit = () => {
  useEffect(() => {
    localStorage.removeItem("loginToken");
  }, []);
  return (
    <div>
      <Navigate to={"/auth"} />
    </div>
  );
};
