//با این فایل متدها رو مدیریت می کنیم

import axios from "axios";
import config from "./config.json";
import swal from "sweetalert";

export const apiPath = config.onlineApi;
//============== نمایش خطا 👇=================
axios.interceptors.response.use(
  (res) => {
    if (res.status != 200 && res.status != 201) {
      if (typeof res.data == "object") {
        let message = "";
        for (const key in res.data) {
          message = message + `${res.data[key]}`;
        }

        res.data.message = message;
      }
      swal("متاسفم!...", res.data.message, "warning");
    }

    return res;
  },
  (error) => {
    swal("خطا!...", "مشکلی رخ داده است", "error");
    return Promise.reject(error);
  }
);

export const httpService = (url, method, data = null) => {
  const tokenInfo = JSON.parse(localStorage.getItem("loginToken"));
  return axios({
    url: config.onlineApi + url,
    method,
    data,
    headers: {
      Authorization: tokenInfo ? `Bearer ${tokenInfo.token}` : null,
      "content-Type": "application/json", //باشه json میگه اون محتوایی که می خواهی ارسال کنی به شکل
    },
  });
};

//میکنه reusable رو axios این فایل فقط
