import jMoment from "jalali-moment";

export const ConvertPersianDateToMiladi = (date) => {
  const persianDate = date.replace(/\s/g, "");

  const newFormPersianDate = jMoment(persianDate, "D/M/YYYY").format(
    "YYYY/MM/DD"
  );

  const miladiDate = jMoment(newFormPersianDate, "jYYYY /jMM/jDD").format(
    "YYYY-M-D"
  );

  return miladiDate;
};
