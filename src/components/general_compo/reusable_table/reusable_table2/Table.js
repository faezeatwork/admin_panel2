import React from "react";
import { GreenSpinner } from "../../spinners&chips/GreenSpinner";

export const Table = ({ data, nameOfColumn, loading }) => {
  return (
    <div>
      {loading ? (
        <GreenSpinner />
      ) : data.length ? (
        <table className=" table_of_reusable_table table table-striped table-responsive text-center table-hover table-bordered">
          <thead>
            <tr>
              {nameOfColumn.map((header) => (
                <th key={Math.random()}>{header.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((rowData) => (
              <tr key={Math.random()}>
                {nameOfColumn.map((header) =>
                  header.field ? (
                    <td>{rowData[header.field]}</td>
                  ) : (
                    <td>{header.elements(rowData)}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="p-5">
          <div className="text-center fs-1">&#128531;</div>
          <h3 className="text-danger text-center p-4">موردی یافت نشد!...</h3>
        </div>
      )}
    </div>
  );
};
