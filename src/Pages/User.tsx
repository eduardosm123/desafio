import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store.ts";
import { useFetchUser } from "../Hook/useFetchUser.tsx";

import {
  setDataRepositories,
  setOrder,
  setPage,
  setSort,
  setTotalPage,
} from "../Redux/Reducer/repositoriesSlice.ts";
import { useEffect } from "react";
import { instance } from "../Api/github.ts";
import { setError, setLoading } from "../Redux/Reducer/fetchSlice.ts";

import { RepositoryItemList } from "../Interfaces/Repositories.ts";
export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const repositories = useSelector(
    (state: RootState) => state.repositories.data
  );
  const sort = useSelector((state: RootState) => state.repositories.sort);
  const order = useSelector((state: RootState) => state.repositories.order);
  const loading = useSelector((state: RootState) => state.fetch.loading);
  const page = useSelector((state: RootState) => state.repositories.pages);
  const totalPage = useSelector(
    (state: RootState) => state.repositories.totalPages
  );

  useFetchUser(user.data.name);

  useEffect(() => {
    async function get() {
      dispatch(setLoading(true));
      try {
        const response = await instance.get(
          `search/repositories?q=user:${user.data.name}&page=${page}&sort=${sort}&per_page=15&order=${order}`
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
            console.log(response.data);
            // console.log(newList);
            dispatch(setDataRepositories(newList));
            dispatch(setTotalPage(Math.ceil(response.data.total_count / 15)));
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
  }, [dispatch, user.data.name, page, sort, order]);

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const handleNextPage = () => {
    if (page < totalPage) {
      dispatch(setPage(page + 1));
    }
  };

  if (!loading) {
    return (
      <div className="bg-gray-700 min-h-screen w-[100%]">
        <h1 className="text-center text-stone-100 font-bold">GitHub Desafio</h1>
        <hr />
        <div className="flex w-[100%] h-[100%] justify-center items-center mt-8 flex-col">
          <div className="sm:w-[60%] md:w-[18%] md:h-[30%] rounded-md bg-stone-500 p-5">
            <div className="flex justify-center">
              {user.data.avatar_url ? (
                <img
                  src={user.data.avatar_url}
                  alt="imagem de perfil do usuário"
                  className="sm:w-[70%] md:w-[50%]  rounded-[50%] "
                />
              ) : (
                <p className="text-gray-100 text-sm/4 font-bold">
                  Usuário sem Imagem
                </p>
              )}
            </div>
            <br />

            <div className="flex justify-center flex-col">
              <p className="text-gray-100 text-sm/4">
                <span className="font-bold">Nome de usuário: </span>
                {user.data.name}
              </p>
              <br />
              <p className="text-gray-100 text-sm/4">
                <span className="font-bold">E-mail: </span>
                {user.data.email ? user.data.email : "E-mail não informado"}
              </p>
              <br />
              <p className="text-gray-100 text-sm/4">
                <span className="font-bold">Bio: </span>
                {user.data.bio ? user.data.bio : "bio não informada"}
              </p>
              <br />
              <p className="text-gray-100 text-sm/4">
                <span className="font-bold">Número de seguidores: </span>
                {user.data.followers}
              </p>
              <br />
              <p className="text-gray-100 text-sm/4">
                <span className="font-bold">Número de seguidos: </span>
                {user.data.following}
              </p>
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-[100%] sm:overflow-x-auto md:flex md:justify-center">
              <table className="sm:w-[100vw] md:w-[90vw] border-collapse text-sm mt-10 mb-3 bg-gray-950 rounded-lg ">
                <thead>
                  <tr>
                    <th className="border-b p-4 pt-2 pb-3 pl-8 text-left font-medium text-gray-400 border-gray-600 text-gray-200">
                      ID
                       
                    </th>

                    <th className="border-b p-4 pt-2 pb-3 pl-8 text-left font-medium text-gray-400 border-gray-600 text-gray-200">
                      Nome do Repositório
                      <button
                        className="ml-1 bg-gray-900 hover:bg-gray-950 px-3 py-1 rounded-md text-stone-100"
                        onClick={() => {
                          dispatch(setSort("name"));
                          dispatch(setOrder("asc"));
                        }}
                        disabled={!(page < totalPage)}
                      >
                        Asc
                      </button>
                      <button
                        className="ml-1 bg-gray-900 hover:bg-gray-950 px-3 py-1 rounded-md text-stone-100"
                        onClick={() => {
                          dispatch(setSort("name"));
                          dispatch(setOrder("desc"));
                        }}
                        disabled={!(page < totalPage)}
                      >
                        Desc
                      </button>
                    </th>

                    <th className="border-b p-4 pt-2 pb-3 pl-8 text-left font-medium text-gray-400 border-gray-600 text-gray-200">
                      Número de Estrelas
                      <button
                        className="ml-1 bg-gray-900 hover:bg-gray-950 px-3 py-1 rounded-md text-stone-100"
                        onClick={() => {
                          dispatch(setSort("stars"));
                          dispatch(setOrder("asc"));
                        }}
                        disabled={!(page < totalPage)}
                      >
                        Asc
                      </button>
                      <button
                        className="ml-1 bg-gray-900 hover:bg-gray-950 px-3 py-1 rounded-md text-stone-100"
                        onClick={() => {
                          dispatch(setSort("stars"));
                          dispatch(setOrder("desc"));
                        }}
                        disabled={!(page < totalPage)}
                      >
                        Desc
                      </button>
                    </th>
                  
                    <th className="border-b p-4 pt-2 pb-3 pl-8 text-left font-medium text-gray-400 border-gray-600 text-gray-200">
                      Data de Atualização
                      <button
                        className="ml-1 bg-gray-900 hover:bg-gray-950 px-3 py-1 rounded-md text-stone-100"
                        onClick={() => {
                          dispatch(setSort("updated"));
                          dispatch(setOrder("asc"));
                        }}
                        disabled={!(page < totalPage)}
                      >
                        Asc
                      </button>
                      <button
                        className="ml-1 bg-gray-900 hover:bg-gray-950 px-3 py-1 rounded-md text-stone-100"
                        onClick={() => {
                          dispatch(setSort("updated"));
                          dispatch(setOrder("desc"));
                        }}
                        disabled={!(page < totalPage)}
                      >
                        Desc
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800">
                  {repositories ? (
                    repositories.map((item, key) => (
                      <tr key={key}>
                        <td className="border-b p-4 pt-2 pb-3 pl-8 text-left text-gray-500 border-gray-700 text-gray-400">
                          {item.id}
                        </td>
                        <td className="border-b p-4 pt-2 pb-3 pl-8 text-left text-gray-500 border-gray-700 text-gray-400">
                          {item.name}
                        </td>
                        <td className="border-b p-4 pt-2 pb-3 pl-8 text-left text-gray-500 border-gray-700 text-gray-400">
                          {item.stargazers_count}
                        </td>
                        <td className="border-b p-4 pt-2 pb-3 pl-8 text-left text-gray-500 border-gray-700 text-gray-400">
                          {new Date(item.updated_at).getDay() +
                            "/" +
                            new Date(item.updated_at).getMonth() +
                            "/" +
                            new Date(item.updated_at).getFullYear()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h1>Nenhum repositório encontrado.</h1>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex  justify-around mt-3 mb-3 w-[100%]">
              <button
                className="ml-1 bg-gray-900 hover:bg-gray-950 px-3 py-1 rounded-md text-stone-100"
                onClick={handlePreviousPage}
                disabled={!(page > 1)}
              >
                Anterior
              </button>
              <span>
                Página {page} de {totalPage}
              </span>
              <button
                className="ml-1 bg-gray-900 hover:bg-gray-950 px-3 py-1 rounded-md text-stone-100"
                onClick={handleNextPage}
                disabled={!(page < totalPage)}
              >
                Próximo
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Carregamento</h1>;
  }
}
