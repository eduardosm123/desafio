import { useNavigate } from "react-router-dom";

export default function BackButton({ page = "/" }: { page: string }) {
  const navigate = useNavigate();

  return (
    <button
      data-testid="BackButton"
      className="ml-1 bg-red-700 hover:bg-red-950 px-3 py-1 rounded-md text-stone-100 cursor-pointer"
      onClick={() => {
        navigate(page);
      }}
    >
      Voltar
    </button>
  );
}
