import React from "react";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import { Admin } from "../Admin";
import { Login } from "../authorization/login/Login";
import { GreenSpinner } from "../../general_compo/spinners&chips/GreenSpinner";

export const Dashboard = () => {
  const [isLogin, loading] = useIsLogin();

  return (
    <div>
      {loading ? (
        <GreenSpinner />
      ) : isLogin ? (
        <Admin />
      ) : (
        <Navigate to={"/auth"} />
      )}
    </div>
  );
};
