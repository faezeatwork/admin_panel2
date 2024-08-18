import React from "react";
import { Inputs } from "./Inputs_auth";
import { SwitchCheckBox } from "./SwitchCheckBox";

export const FormControl = (props) => {
  switch (props.control) {
    case "input":
      return <Inputs {...props} />;
    case "switch":
      return <SwitchCheckBox {...props} />; //مرا بخاطر بسپار 😁
  }
};
