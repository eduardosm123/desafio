import { FormEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store.ts";

import { clearUser, setUsername } from "../Redux/Reducer/userSlice.ts";

import { useNavigate } from "react-router-dom";
import { clearRepositoriesList } from "../Redux/Reducer/repositoriesSlice.ts";
import { clearFetch } from "../Redux/Reducer/fetchSlice.ts";
import { clearRepository } from "../Redux/Reducer/repositorySlice.ts";
import NavBar from "../Components/Navbar/Navbar.tsx";
export default function Home() {
  const username = useSelector((state: RootState) => state.user.data.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username) {
      navigate("/user");
    }
  };

  useEffect(() => {
    dispatch(clearRepositoriesList());
    dispatch(clearFetch());
    dispatch(clearUser());
    dispatch(clearRepository());
  }, [dispatch]);

  return (
    <NavBar>
      <div className="flex flex-col justify-center items-center mt-[10%] w-full" data-testid="Home">
        <form onSubmit={handleSubmit} className="sm:w-[40%] md:w-[30%]">
          <label className="font-bold text-stone-100">
            Digite o nome do usuário:
          </label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Digite o nome do usuario"
            value={username || ""}
            className="placeholder-gray-100 text-gray-100 border-1 border-white w-[100%]"
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Buscar"
            className="bg-green-400 hover:bg-green-600 px-3 cursor-pointer py-1 rounded-md text-stone-100"
          />
        </form>
      </div>
    </NavBar>
  );
}
