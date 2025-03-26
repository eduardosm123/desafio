import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "@reduxjs/toolkit";
import { UnknownAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { setError, setLoading } from "../Redux/Reducer/fetchSlice";
import { instance } from "../Api/github";
import { RepositoryItemList } from "../Types/Repository";
import {
  setDataRepositories,
  setTotalPage,
} from "../Redux/Reducer/repositoriesSlice";

export default function useFetchRepositories(
  dispatch: Dispatch<UnknownAction>,
  name: string,
  page: number,
  sort: string,
  order: string,
  navigate: NavigateFunction
) {
  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      dispatch(setError(""));
      try {
        const response = await instance.get(
          `search/repositories?q=user:${name}&page=${page}&sort=${sort}&per_page=15&order=${order}`
        );

        if (response.status === 200) {
          if (
            response &&
            response.data &&
            response.data.items &&
            response.data.items.length > 0
          ) {
            const newList = response.data.items.map(
              ({
                id,
                name,
                updated_at,
                stargazers_count,
              }: RepositoryItemList) => ({
                id,
                name,
                updated_at,
                stargazers_count,
              })
            );

            dispatch(setDataRepositories(newList));
            dispatch(setTotalPage(Math.ceil(response.data.total_count / 15)));
          } else {
            console.log(
              "Request was not successful, status code: ",
              response.status
            );
            dispatch(setError("Erro ao buscar repositorios"));
            navigate("/");
          }
        }
        dispatch(setLoading(false));
      } catch (error) {
        console.log(error);
        dispatch(setError("Erro ao buscar repositorios"));
        navigate("/error");
      }
    }
    get();
  }, [dispatch, name, page, sort, order, navigate]);
}
