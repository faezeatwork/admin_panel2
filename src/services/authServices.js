import { httpService } from "./httpService";

export const loginService = (values) => {
  return httpService("api/auth/login", "post", {
    ...values,
    remember: values.remember ? 1 : 0,
  });
};

export const registerService = () => {
  return httpService("api/auth/", "post");
};


export const isLoginService = async (
  loading,
  isLogin,
  setIsLogin,
  setLoading
) => {
  const loginToken = JSON.parse(localStorage.getItem("loginToken"));
  if (loginToken) {
    const res = await httpService("api/auth/user", "get", {
      headers: {
        Authorization: `Bearer ${loginToken.token}`,
      },
    });
    try {
      setIsLogin(res.status == 200 ? true : false);
      setLoading(false);
    } catch (error) {
      localStorage.removeItem("loginToken");
      setIsLogin(false);
      setLoading(false);
    }
  } else {
    setIsLogin(false);
    setLoading(false);
  }
};
