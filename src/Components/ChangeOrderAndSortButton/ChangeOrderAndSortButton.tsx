import { useDispatch } from "react-redux";
import { setOrder, setSort } from "../../Redux/Reducer/repositoriesSlice";

export default function ChangeOrderAndSortButton({
  information,
  sort,
  order,
}: {
  information: string;
  sort: string;
  order: string;
}) {
  const dispatch = useDispatch();

  return (
    <button
     data-testid="ChangeOrderAndSortButton"
      className="ml-1 bg-gray-900 hover:bg-gray-950 px-3 py-1 rounded-md text-stone-100 cursor-pointer"
      onClick={() => {
        dispatch(setSort(sort));
        dispatch(setOrder(order));
      }}
    >
      {information}
    </button>
  );
}
