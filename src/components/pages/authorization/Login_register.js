import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "./register/Register";
import { Auth } from "./Auth";
import { Login } from "./login/Login";

export const Login_register = () => {
  return (
    <Routes>
      <Route path="/auth">
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};
