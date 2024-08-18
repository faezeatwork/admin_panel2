import React from "react";

export const Chips = ({ chips, setChips }) => {

  const handleDeleteChips = (thisChip) => {
    setChips(chips?.filter((c) => c.id != thisChip));
  };
  return (
    <div className={`${chips?.length ? "mb-3 d-flex" : null}`} >
      {chips?.map((c) => (
        <span key={Math.random()} className="chips mx-1">
          <i
            className="close fas fa-times ps-2 pointer text-danger"
            onClick={() => handleDeleteChips(c.id)}
          ></i>
          {c.value || c.title}
        </span>
      ))}
    </div>
  );
};
