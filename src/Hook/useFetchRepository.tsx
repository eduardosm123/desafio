import { useEffect } from "react";
import { instance } from "../Api/github";

import { useDispatch } from "react-redux";

import { setError, setLoading } from "../Redux/Reducer/fetchSlice.ts";
import {
  setTotalPage,
  setDataRepositories,
} from "../Redux/Reducer/repositoriesSlice.ts";
import { RepositoryItemList } from "../Interfaces/Repositories.ts";

 
export const useFetchRepository = (
  username: string,
  page = 1,
  sort = "stars",
  order = "desc"
) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      try {
        const response = await instance.get(
          `search/repositories?q=user:${username}&page=${page}&sort=${sort}&per_page=5&order=${order}`
        );

        if (response.status === 200) {
          if (
            response &&
            response.data &&
            response.data.items &&
            response.data.items.length > 0
          ) {
            const newList = response.data.items.map(
              ({ id, name, created_at, updated_at, stargazers_count }:RepositoryItemList) => ({
                id,
                name,
                created_at,
                updated_at,
                stargazers_count,
              }) 
            );
            //console.log(response.data)
            console.log(newList);
            dispatch(setDataRepositories(newList));
            dispatch(setTotalPage(response.data.total_count / 5));
          } else {
            console.log(
              "Request was not successful, status code: ",
              response.status
            );
          }
        }
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError(error));
      }
    }
    get();
    dispatch(setLoading(false));
  }, [dispatch, username, page, sort, order]);
};
