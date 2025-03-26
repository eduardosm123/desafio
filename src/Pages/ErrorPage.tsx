import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../Redux/Reducer/userSlice.ts";
import { clearRepositoriesList } from "../Redux/Reducer/repositoriesSlice.ts";
import { clearRepository } from "../Redux/Reducer/repositorySlice.ts";
import { RootState } from "../Redux/store.ts";
import NavBar from "../Components/Navbar/Navbar.tsx";
import BackButton from "../Components/BackButton/BackButton.tsx";

export default function ErrorPage() {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.fetch.error);

  useEffect(() => {
    dispatch(clearRepositoriesList());
    dispatch(clearUser());
    dispatch(clearRepository());
  }, [dispatch]);

  return (
    <NavBar>
      <div
        className="flex flex-col justify-center items-center mt-[10%] w-[100%] flex-wrap"
        data-testid="ErrorPage"
      >
        <div className="sm:w-[40%] md:w-[30%]">
          <h1 className="font-bold text-stone-100 text-center">
            Ocorreu um Erro: {error}
          </h1>
          <br />
          <h1 className="font-bold text-stone-100 text-center">
            Se o erro persistir espere um momento e tente novamente,
            provavelmente são muitas solicitações em pouco em pouco tempo.
          </h1>
          <br />
          <div className="flex justify-center">
            <BackButton page="/" />
          </div>
        </div>
      </div>
    </NavBar>
  );
}
