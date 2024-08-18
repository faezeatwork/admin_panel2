import React from "react";

export const SearchBox = ({ setSearchChar, placeholder_searchBox }) => {
  return (
    <div className="input-group mb-3 searchBox">
      <span className="input-group-text searchButton " id="basic-addon2">
        جستجو
      </span>
      <input
        type="text"
        className="form-control searchInput"
        placeholder={placeholder_searchBox}
        onChange={(e) => setSearchChar(e.target.value)}
      />
    </div>
  );
};
