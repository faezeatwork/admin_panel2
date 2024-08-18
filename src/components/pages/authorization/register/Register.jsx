import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { RegisterInputs } from "./RegisterInputs";
import { NavLink } from "react-router-dom";

export const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="animate__animated animate__shakeY">
        <div className="customRegister">
          <div className="w-100 text-center">
            {/* register icon 🙋‍♀️🙋‍♂️*/}
            <img
              src="../assets/images/user-image.png"
              alt="user"
              className="formIcon"
            />
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <RegisterInputs />
          </div>
        </div>
        <div className=" mt-1 customRegisterLink ">
          <div className=" pointer h-100 d-flex justify-content-center align-items-center fs-4">
            <NavLink
              to={"/auth"}
              className="text-decoration-none text-dark ps-1"
            >
              ورود
              <AiOutlineArrowLeft className="switch_loginReg_icon" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
