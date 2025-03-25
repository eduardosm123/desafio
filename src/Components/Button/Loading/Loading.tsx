import { useNavigate } from "react-router-dom"


export default function Loading() {

    const navigate = useNavigate()
    return (
        <div>
        <div className="bg-gray-800 min-h-screen w-[100%]">
          <h1 className="text-center text-stone-100 font-bold">
            GitHub Desafio
          </h1>
          <hr />
          <div className="flex flex-col justify-center items-center mt-[10%] w-[100%] flex-wrap">
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
        </div>
      </div>
    )
}