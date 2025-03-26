import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Redux/store.ts";
import { useFetchUser } from "../Hook/useFetchUser.tsx";
import { useEffect } from "react";
import { clearRepository, setName } from "../Redux/Reducer/repositorySlice.ts";
import { useNavigate } from "react-router-dom";
import useFetchRepositories from "../Hook/useFetchRepositories.tsx";
import Loading from "../Components/Loading/Loading.tsx";
import NavBar from "../Components/Navbar/Navbar.tsx";
import FieldInformation from "../Components/FieldInformation/FieldInformation.tsx";
import BackButton from "../Components/BackButton/BackButton.tsx";
import ChangeOrderAndSortButton from "../Components/ChangeOrderAndSortButton/ChangeOrderAndSortButton.tsx";
import ErrorPage from "./ErrorPage.tsx";
import ChangePage from "../Components/ChangePage/ChangePage.tsx";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const repositories = useSelector((state: RootState) => state.repositories.data);
  const sort = useSelector((state: RootState) => state.repositories.sort);
  const order = useSelector((state: RootState) => state.repositories.order);
  const loading = useSelector((state: RootState) => state.fetch.loading);
  const page = useSelector((state: RootState) => state.repositories.pages);
  const navigate = useNavigate();
  useFetchUser(user.data.name);

  useEffect(() => {
    dispatch(clearRepository());
  }, [dispatch]);

  useFetchRepositories(dispatch, user.data.name, page, sort, order, navigate);

  if (!loading) {
    return (
      <NavBar>
        <div className="flex w-[100%] h-[100%] justify-center items-center mt-8 flex-col" data-testid="User">
          <div className="sm:w-[60%] md:w-[18%] md:h-[30%] rounded-md bg-slate-950 p-5">
            <div className="flex justify-center">
              {user.data.avatar_url ? (
                <img
                  src={user.data.avatar_url}
                  alt="imagem de perfil do usuário"
                  className="sm:w-[70%] md:w-[50%]  rounded-[50%] "
                />
              ) : (
                <p className="text-gray-100 text-xs/4 font-bold">
                  Usuário sem Imagem
                </p>
              )}
            </div>
            <br />

            <div className="flex justify-center flex-col">
              <FieldInformation
                field="Nome de usuário: "
                information={user.data.name}
              />
              <br />
              <FieldInformation
                field="E-mail: "
                information={
                  user.data.email ? user.data.email : "E-mail não informado"
                }
              />
              <br />
              <FieldInformation
                field="Bio: "
                information={
                  user.data.bio ? user.data.bio : "bio não informada"
                }
              />
              <br />
              <FieldInformation
                field="Número de seguidores: "
                information={user.data.followers.toString()}
              />
              <br />
              <FieldInformation
                field="Número de seguidos: "
                information={user.data.following.toString()}
              />
              <br />
              <div className="flex justify-end ">
                <BackButton page="/"></BackButton>
              </div>
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-[100%] sm:overflow-x-auto md:flex md:justify-center">
              <table className="sm:w-[100vw] md:w-[90vw] border-collapse sm:text-xs mt-10 mb-3 bg-gray-950 rounded-lg ">
                <thead>
                  <tr>
                    <th className="border-b p-4 pt-2 pb-3 pl-8 text-left  md:text-sm sm:text-[0.7rem] font-medium text-gray-400 border-gray-600 text-gray-200">
                      ID
                    </th>

                    <th className="border-b p-4 pt-2 pb-3 pl-8 text-left  md:text-sm sm:text-[0.7rem] font-medium text-gray-400 border-gray-600 text-gray-200">
                      Nome do Repositório
                      <ChangeOrderAndSortButton
                        information="Asc"
                        sort="name"
                        order="asc"
                      />
                      <ChangeOrderAndSortButton
                        information="Desc"
                        sort="name"
                        order="desc"
                      />
                    </th>

                    <th className="border-b p-4 pt-2 pb-3 pl-8  text-left  md:text-sm sm:text-[0.7rem] font-medium text-gray-400 border-gray-600 text-gray-200">
                      Número de Estrelas
                      <ChangeOrderAndSortButton
                        information="Asc"
                        sort="stars"
                        order="asc"
                      />
                      <ChangeOrderAndSortButton
                        information="Desc"
                        sort="stars"
                        order="desc"
                      />
                    </th>

                    <th className="border-b p-4 pt-2 pb-3 pl-8 text-left  md:text-sm sm:text-[0.7rem] font-medium text-gray-400 border-gray-600 text-gray-200">
                      Data de Atualização
                      <ChangeOrderAndSortButton
                        information="Asc"
                        sort="updated"
                        order="asc"
                      />
                      <ChangeOrderAndSortButton
                        information="Desc"
                        sort="updated"
                        order="desc"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800">
                  {repositories ? (
                    repositories.map((item, key) => (
                      <tr
                        key={key}
                        onClick={() => {
                          dispatch(setName(item.name));
                          navigate("/repository");
                        }}
                      >
                        <td className="border-b p-4 pt-2 pb-3 pl-8 text-left  md:text-sm sm:text-[0.7rem] text-gray-500 border-gray-700 text-gray-400">
                          {item.id}
                        </td>
                        <td className="border-b p-4 pt-2 pb-3 pl-8 text-left  md:text-sm sm:text-[0.7rem] text-gray-500 border-gray-700 text-gray-400">
                          {item.name}
                        </td>
                        <td className="border-b p-4 pt-2 pb-3 pl-8 text-left  md:text-sm sm:text-[0.7rem] text-gray-500 border-gray-700 text-gray-400">
                          {item.stargazers_count}
                        </td>
                        <td className="border-b p-4 pt-2 pb-3 pl-8 text-left  md:text-sm sm:text-[0.7rem] text-gray-500 border-gray-700 text-gray-400">
                          {new Date(item.updated_at).getDate() < 10 ? "0" + (new Date(item.updated_at).getDate()).toString() : new Date(item.updated_at).getDate()} /{" "}
                          {new Date(item.updated_at).getMonth() + 1 < 10
                            ? "0" +
                              (
                                new Date(item.updated_at).getMonth() + 1
                              ).toString()
                            : new Date(item.updated_at).getMonth() + 1}{" "}
                          / {new Date(item.updated_at).getFullYear()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <h1 className="text-gray-100">Nenhum repositório encontrado.</h1>
                  )}
                </tbody>
              </table>
            </div>
                  <ChangePage />
            
          </div>
        </div>
      </NavBar>
    );
  } else if (!user.data.name) {
    return <div data-testid="User">
      <ErrorPage />
    </div>
  } else {
    return (
      <Loading />
    )
  }
}
