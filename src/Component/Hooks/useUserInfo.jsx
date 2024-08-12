import { useEffect, useState } from "react";
import useAxiosPrivate from "./useAxiosPrivate";
import useAuth from "./useAuth";

const useUserInfo = () => {
  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    axiosPrivate.get(`/user/${user.email}`).then((res) => {
      setUserInfo(res.data);
    });
  }, [axiosPrivate, user.email]);
  return userInfo;
};

export default useUserInfo;
