import { useNavigate } from "react-router-dom";
 
import NavBar from "../Navbar/Navbar";
export default function Loading() {
  const navigate = useNavigate();
  return (
    <NavBar>
      <div className="flex flex-col justify-center items-center mt-[10%] w-[100%] flex-wrap" data-testid="Loading">
        <div className="sm:w-[40%] md:w-[30%]">
          <h1 className="font-bold text-stone-100 text-center">
            Carregando... Demorando muito ? por favor tente novamente
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
    </NavBar>
  );
}
