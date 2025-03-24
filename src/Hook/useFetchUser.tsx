import { useDispatch } from "react-redux";
import { IUser } from "../Interfaces/User";
import { setError, setLoading } from "../Redux/Reducer/fetchSlice";
import { instance } from "../Api/github";
import { setUser } from "../Redux/Reducer/userSlice";
import { RootState } from "../Redux/store.ts";
import { useSelector } from "react-redux";
import { setLoad } from "../Redux/Reducer/userSlice";
import { useEffect } from "react";

export const useFetchUser = (username: string) => {
  const dispatch = useDispatch();
  const load = useSelector((state: RootState) => state.user.load);

  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      if (load) return;
      try {
        const response = await instance.get(`users/${username}`);

        if (response.status === 200) {
          console.log("Request was Sucessful", response.data);
          const newUser: IUser = {
            data: {
              name: response.data.login ? response.data.login : "",
              avatar_url: response.data.avatar_url
                ? response.data.avatar_url
                : "",
              bio: response.data.bio ? response.data.bio : "",
              followers: response.data.followers ? response.data.followers : 0,
              following: response.data.following ? response.data.following : 0,
              email: response.data.email ? response.data.email : "",
            },
          };
          dispatch(setUser(newUser.data));
          dispatch(setLoad(true));
        } else {
          console.log(
            "Request was not successful, status code: ",
            response.status
          );
          console.log(response);
          dispatch(setError(response.statusText));
        }
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError(error));
      }
    }
    get();
  }, [dispatch, load, username]);
};
