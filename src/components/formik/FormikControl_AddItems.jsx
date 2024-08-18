import { AddFile } from "./props_control_compos/AddFile";
import { Select_Input } from "./props_control_compos/Select_Input";
import { TextArea } from "./props_control_compos/TextArea";
import { Inputs } from "./props_control_compos/Inputs";
import { SwitchCheckBox } from "../pages/authorization/SwitchCheckBox";
import { Radiobtn } from "./props_control_compos/Radiobtn";
import { MultiSelect_Input } from "./props_control_compos/MultiSelect_Input";
import { CkEditor } from "./props_control_compos/CkEditor";
import { TypesOfAttr } from "./props_control_compos/TypesOfAttr";
import { PersianDate } from "./props_control_compos/PersianDate";
import { CheckBox } from "./props_control_compos/CheckBox";

export const FormikControl = (props) => {
  switch (props.control) {
    case "input":
      return <Inputs {...props} />;
    case "select":
      return <Select_Input {...props} />;
    case "multiSelect":
      return <MultiSelect_Input {...props} />; //chips ha injan
    case "textArea":
      return <TextArea {...props} />;
    case "addFile":
      return <AddFile {...props} />;
    case "checkbox":
      return <CheckBox {...props} />;
    case "switchCheckbox":
      return <SwitchCheckBox {...props} />;
    case "radio":
      return <Radiobtn {...props} />;
    case "ckEditor":
      return <CkEditor {...props} />; //textarea ba ghabeliate virayesh motoon
    case "typeOfAtt":
      return <TypesOfAttr {...props} />;
    case "persianDate":
      return <PersianDate {...props} />;
  }
};
