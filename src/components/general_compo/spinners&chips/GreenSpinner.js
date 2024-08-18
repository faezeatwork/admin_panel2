import React from "react";

export const GreenSpinner = () => {
  return (
    <div className="m-5 p-5 d-flex justify-content-center align-items-center">
      <div className="lds-hourglass"></div>
      <div className="lds-hourglass"></div>
      <div className="lds-hourglass"></div>
    </div>
  );
};
