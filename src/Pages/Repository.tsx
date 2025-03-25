import { useSelector } from "react-redux";
import { useFetchRepository } from "../Hook/useFetchRepository";
import { RootState } from "../Redux/store";
import NavBar from "../Components/Navbar/Navbar";
import FieldInformation from "../Components/FieldInformation/FieldInformation";
import BackButton from "../Components/BackButton/BackButton";
import ErrorPage from "./ErrorPage";
 
 

export default function Repository() {
  useFetchRepository();
  const loading = useSelector((state: RootState) => state.fetch.loading);
  const repository = useSelector((state: RootState) => state.repository.data);
  if (!loading) {
    return (
      <NavBar>
        <div className="flex w-[100%] h-[100%] justify-center items-center mt-[5%] flex-col " data-testid="Repository">
          <div className="sm:w-[60%] md:w-[18%] md:h-[30%] rounded-md bg-slate-950 p-5">
            <FieldInformation
              field="Nome do Repositório: "
              information={
                repository.name ? repository.name : "Nome não encontrado"
              }
            />
            <br />
            <FieldInformation
              field="Descrição: "
              information={
                repository.description
                  ? repository.description
                  : "Descrição não informado"
              }
            />
            <br />
            <FieldInformation
              field="Número de Estrelas: "
              information={repository.stargazers_count.toString()}
            />
            <br />

            <FieldInformation
              field="Linguagem principal: "
              information={
                repository.language
                  ? repository.language
                  : "Principal Linguagem não encontrado"
              }
            />
            <br />
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Link </span>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={repository.html_url}
              >
                Acessar Repositório
              </a>
            </p>
            <br />
            <div className="flex justify-end ">
              <BackButton page="/user"></BackButton>
            </div>
          </div>
        </div>
      </NavBar>
    );
  } else if (!repository.name) {
   return (
   <div data-testid="Repository">
     <ErrorPage />
   </div>
   )
  } else {
    return (
      <NavBar>
        <h1 data-testid="Repository">Carregando ...</h1>
      </NavBar>
    );
  }
}
