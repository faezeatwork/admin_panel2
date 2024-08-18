import React from "react";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import { Login_register } from "./Login_register";


export const Auth = () => {
const [isLogin, loading] = useIsLogin();

  return (
    <div>
      {loading ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="lds-hourglass"></div>
          <div className="lds-hourglass"></div>
          <div className="lds-hourglass"></div>
        </div>
      ) : !isLogin ? (
        <Login_register />
      ) : (
        <Navigate to={"/"} />
      )}
    </div>
  );
};
