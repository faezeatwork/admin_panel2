import React from "react";

export const Table = ({
  dataOfRows,
  nameOfColumn,
  additionField,
  dataAnyPage,
}) => {
  return (
    <div>
      {/* {console.log(dataAnyPage)} */}
      {dataOfRows.length ? (
        <table className=" table_of_reusable_table table table-striped table-responsive text-center table-hover table-bordered">
          <thead>
            <tr>
              {nameOfColumn.map((item) => (
                <th key={Math.random()}>{item.title}</th>
              ))}
              {additionField
                ? additionField.map((a, index) => <th>{a.title}</th>)
                : null}
            </tr>
          </thead>

          <tbody>
            {dataAnyPage.map((data) => (
              <tr key={Math.random()}>
                {nameOfColumn.map((item) => (
                  <td key={Math.random()}>
                    {item.field ? data[item.field] : item.elements(data)}
                  </td>
                ))}
                {additionField
                  ? additionField.map((a, index) => (
                      <td key={Math.random()}>{a.elements(data)}</td>
                    ))
                  : null}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="text-center text-danger ">موردی یافت نشد</h3>
      )}
    </div>
  );
};
