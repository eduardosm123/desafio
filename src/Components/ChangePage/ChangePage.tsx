import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../Redux/Reducer/repositoriesSlice";
import { RootState } from "../../Redux/store";

export default function ChangePage() {
  const page = useSelector((state: RootState) => state.repositories.pages);
  const totalPage = useSelector(
    (state: RootState) => state.repositories.totalPages
  );
  const dispatch = useDispatch();

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

  return (
    <div className="flex  justify-around mt-3 mb-3 w-[100%]" data-testid="ChangePage">
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
  );
}
