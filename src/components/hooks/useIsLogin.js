import { useEffect, useState } from "react";
import { isLoginService } from "../../services/authServices";

export const useIsLogin = () => {
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    isLoginService(loading, isLogin, setIsLogin, setLoading);
  }, []);

  return [isLogin, loading];
};
