import { Field } from "formik";
import React, { useState } from "react";
import { useEffect } from "react";
import { Chips } from "../../general_compo/spinners&chips/Chips";
import { handleOnChange } from "../../pages/2-product/add_or_edit_product/Get_Items_dropdowns";
import { useNavigate } from "react-router-dom";

export const MultiSelect_Input = (props) => {
  const {
    chips,
    setChips,
    label,
    option,
    name,
    addBtnPath,
    dynamicPath,
    idOfParent,
    addBtnOption,
    selectedItems, // chips ro too form edit namayesh bede
    stateForTitleNav,
    customAnimatedClass,
    mandatory,
  } = props;

  const [searchedOption, setSearchedOption] = useState();
  const [showOption, setShowOption] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setSearchedOption(option);
    // setChips(selectedItems); // chips ro too form edit namayesh bede
  }, [option, idOfParent]);

  useEffect(() => {
    //برای اینکه وقتی رو صفحه کلیک میکنیم
    // لیست برند و گارانتی بسته بشه
    document.querySelector("body").addEventListener("click", () => {
      setShowOption(false);
    });
  }, []);

  return (
    <div className="">
      <div className="p-2 ">
        <div
          className={`input-group mb-1 ${
            selectedItems?.length ? "" : customAnimatedClass
          }`}
        >
          <span className="input-group-text w_6rem customWidth-112">
            {label}
            {mandatory ? <span>*</span> : null}
          </span>
          <Field>
            {() => {
              return (
                <Field
                  as="text"
                  className="form-control form-select"
                  // name={name}
                >
                  {
                    <div className="d-flex justify-content-between">
                      <div>
                        <div>
                          <input
                            name={name}
                            className="w-100 border-none outline_none"
                            // type="text"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowOption(!showOption);
                            }}
                            onChange={(e) => {
                              setSearchedOption(
                                option.filter((o) =>
                                  o.value.includes(e.target.value)
                                )
                              );
                            }}
                          />
                        </div>
                      </div>
                      {addBtnOption && (
                        <button
                          // id="btn-close-modal"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                          className="btn btn-sm btn-light d-flex"
                          onClick={() =>
                            navigate(
                              `${
                                dynamicPath
                                  ? `${addBtnPath}${idOfParent}`
                                  : addBtnPath
                              }`,
                              { state: stateForTitleNav }
                            )
                          }
                        >
                          <i className="fas fa-plus text-success"></i>
                        </button>
                      )}
                    </div>
                  }
                </Field>
              );
            }}
          </Field>
        </div>
        <Field>
          {({ form }) => {
            return (
              <ul
                className={`${
                  showOption ? "" : "d-none bg-danger"
                }list-unstyled searchedOption`}
              >
                {searchedOption?.map((so) => (
                  <li
                    key={Math.random()}
                    className="pointer"
                    onClick={() => {
                      handleOnChange(
                        so.id,
                        form,
                        option,
                        chips,
                        setChips,
                        name
                      );
                    }}
                  >
                    {so.value || so.title}
                  </li>
                ))}
              </ul>
            );
          }}
        </Field>
      </div>
      <Chips chips={chips} setChips={setChips} />
    </div>
  );
};
