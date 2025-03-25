import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser } from "../Redux/Reducer/userSlice.ts";
import { clearRepositoriesList } from "../Redux/Reducer/repositoriesSlice.ts";
import { clearFetch } from "../Redux/Reducer/fetchSlice.ts";
import { clearRepository } from "../Redux/Reducer/repositorySlice.ts";
import NavBar from "../Components/Navbar/Navbar.tsx";
import BackButton from "../Components/BackButton/BackButton.tsx";
export default function NotFoundPage() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(clearRepositoriesList());
    dispatch(clearFetch());
    dispatch(clearUser());
    dispatch(clearRepository());
  }, [dispatch]);

  return (
      <NavBar>
        <div className="flex flex-col justify-center items-center mt-[10%] w-[100%] flex-wrap" data-testid="NotFoundPage">
        <div className="sm:w-[40%] md:w-[30%]">
          <h1 className="font-bold text-stone-100 text-center">
            404 - Pagina não encontrada
          </h1>
          <br />
          <div className="flex justify-center">
          <BackButton page="/"/>
          </div>
        </div>
      </div>
      </NavBar>
   
  );
}
