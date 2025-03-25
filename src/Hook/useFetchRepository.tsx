import { useEffect } from "react";
import { instance } from "../Api/github";

import { useDispatch, useSelector } from "react-redux";
import { setError, setLoading } from "../Redux/Reducer/fetchSlice";
import { RootState } from "../Redux/store";
import { setDataRepository } from "../Redux/Reducer/repositorySlice";
import { useNavigate } from "react-router-dom";

export const useFetchRepository = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.repository.data.name);
  const owner = useSelector((state: RootState) => state.user.data.name);
  const navigate = useNavigate();
  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      dispatch(setError(""));
      try {
        const response = await instance.get(`repos/${owner}/${name}`);
        console.log(response.data);
        if (response.status === 200) {
          const repository = {
            data: {
              name: name,
              description: response.data.description
                ? response.data.description
                : "",
              stargazers_count: response.data.stargazers_count
                ? response.data.stargazers_count
                : 0,
              language: response.data.language ? response.data.language : "",
              html_url: response.data.html_url ? response.data.html_url : "",
            },
          };
          dispatch(setDataRepository(repository.data));
        } else {
          dispatch(setError("Um erro ocorreu ao buscar informações sobre o repositório."));
          navigate("/error");
        }
      } catch (error) {
        console.log(error);
        dispatch(setError("Um erro ocorreu ao buscar informações sobre o repositório."));
        navigate("/error");
      }
      dispatch(setLoading(false));
    }
    get();
  }, [dispatch, name, owner, navigate]);
};
