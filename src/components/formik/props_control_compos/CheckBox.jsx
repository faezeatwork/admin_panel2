import { ErrorMessage, FastField } from "formik";
import React, { Fragment } from "react";

export const CheckBox = (props) => {
  const { name, label, options, options2 } = props;

  return (
    <div className="mb-2">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <ErrorMessage
        name={name}
        render={(msg) => <small className="text-danger pe-2">{msg}</small>}
      />
      <div className="row p-3">
        <FastField className="form-control" id={name} name={name}>
          {({ field }) => {
            // console.log(options2);
            // console.log(field);

            return options.map((o) => (
              <div className="d-flex justify-content-between align-items-start col-6">
                <Fragment key={o.id}>
                  <label htmlFor={o.title} className="">
                    {o.title}
                  </label>
                  <input
                    className="form-check-input pointer"
                    type="checkbox"
                    id={`${name}_${o.id}`}
                    {...field}
                    value={o.id}
                  />
                </Fragment>
              </div>
            ));
          }}
        </FastField>
      </div>
      {/* <ErrorMessage name={name}component={Personalerror} /> */}
    </div>
  );
};
