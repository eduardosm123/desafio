import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearUser } from "../Redux/Reducer/userSlice.ts";

import { useNavigate } from "react-router-dom";
import { clearRepositoriesList } from "../Redux/Reducer/repositoriesSlice.ts";
import { clearRepository } from "../Redux/Reducer/repositorySlice.ts";
import { RootState } from "../Redux/store.ts";

export default function NotFoundPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector((state: RootState) => state.fetch.error);

  useEffect(() => {
    dispatch(clearRepositoriesList());
    dispatch(clearUser());
    dispatch(clearRepository());
  }, [dispatch]);

  return (
    <div className="bg-gray-800 min-h-screen w-[100%]">
      <h1 className="text-center text-stone-100 font-bold">GitHub Desafio</h1>
      <hr />
      <div className="flex flex-col justify-center items-center mt-[10%] w-[100%] flex-wrap">
        <div className="sm:w-[40%] md:w-[30%]">
          <h1 className="font-bold text-stone-100 text-center">
            Ocorreu um Erro: {error}
          </h1>
          <br />
          <h1 className="font-bold text-stone-100 text-center">
            Se o erro persistir espere um momento e tente novamente, provavelmente são muitas requisições em pouco tempo.
          </h1>
          <br />
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-red-400 hover:bg-red-600 px-3 cursor-pointer py-1 rounded-md text-stone-100"
            >
              Voltar ao inicio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
