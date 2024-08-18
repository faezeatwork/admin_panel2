import React from "react";
import { useNavigate } from "react-router-dom";

export const PrevPageBtn = ({ returnTitle, customStyle, goWhere }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`text-primary pointer ${customStyle}`}
      onClick={() => (goWhere ? navigate(goWhere) : navigate(-1))}
    >
      {returnTitle}
    </div>
  );
};
