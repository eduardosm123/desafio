import { useSelector } from "react-redux";
import { useFetchRepository } from "../Hook/useFetchRepository";
import { RootState } from "../Redux/store";
import { useNavigate } from "react-router-dom";

export default function Repository() {
  useFetchRepository();
  const loading = useSelector((state: RootState) => state.fetch.loading);
  const repository = useSelector((state: RootState) => state.repository.data);
  const navigate = useNavigate()
  if (!loading) {
    return (
      <div className="bg-gray-700 min-h-screen w-[100%]">
        <h1 className="text-center text-stone-100 font-bold">GitHub Desafio</h1>
        <hr />
        <div className="flex w-[100%] h-[100%] justify-center items-center mt-[5%] flex-col " >
          <div className="sm:w-[60%] md:w-[18%] md:h-[30%] rounded-md bg-slate-950 p-5">
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Nome do Repositório: </span>
              {repository.name ? repository.name : "Nome não encontrado"}
            </p>
            <br />
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Descrição: </span>
              {repository.description ? repository.description : "Descrição não informado"}
            </p>
            <br />
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Número de Estrelas: </span>
              {repository.stargazers_count}
            </p>
            <br />
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Linguagem principal: </span>
              {repository.language ? repository.language : "Principal Linguagem não encontrado"}
            </p>
            <br />
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Link </span>
              <a target='_blank' rel="noopener noreferrer" href={repository.html_url}>Acessar Repositório</a>
            </p>
            <br />
            <div className="flex justify-end ">
                <button
                  className="ml-1 bg-red-700 hover:bg-red-950 px-3 py-1 rounded-md text-stone-100"
                  onClick={() => {
                    navigate("/user");
                  }}
                >
                  Voltar
                </button>
              </div>
          </div>
        </div>
      </div>
    );
  } else if (!repository.name) {
    navigate("/")
  } else {
    return <div className="bg-gray-700 min-h-screen w-[100%]">
      <h1>Carregando</h1>
    </div>
  }
}
