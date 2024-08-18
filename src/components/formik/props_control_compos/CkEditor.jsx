import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Field } from "formik";

export const CkEditor = ({ name, label, placeholder }) => {
  return (
    <Field>
      {({ form }) => {
        return (
          <div className="App px-2 mb-2">
            <div>
              <CKEditor
                editor={ClassicEditor}
                data={form.values.descriptions || `<p>${placeholder}</p>`}
                onReady={(editor) => {
                  //وقتی صفحه رندر میشه
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();

                  form.setFieldValue(name, data);
                }}
                onBlur={(event, editor) => {
                  //وقتی بیرون از باکس کلیک میکنی
                  // console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  //وقتی داخل باکس کلیک میکنی
                  editor.getData() == `<p>${placeholder}</p>`
                    ? editor.setData("")
                    : console.log("");
                }}
              />
            </div>
          </div>
        );
      }}
    </Field>
  );
};
