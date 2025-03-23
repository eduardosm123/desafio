import * as React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store.ts";
import { useNavigate } from "react-router-dom";
export default function Home() {
  
  
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log("usuario atual: ", user);
  }, []);

  if (user) {
    return (
      <div className="bg-gray-800 min-h-screen w-full">
        <h1 className="text-center text-stone-100 font-bold">GitHub API</h1>
        <hr />
      </div>
    );
  } else {
    return <h1>Carregamento</h1>;
  }
}
