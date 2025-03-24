import * as React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../Redux/store.ts";

export default function Home() {
  const user = useSelector((state: RootState) => state.user);

  React.useEffect(() => {
    console.log("usuario atual: ", user);
  }, []);

  if (user.data) {
    return (
      <div className="bg-gray-800 min-h-screen w-full">
        <h1 className="text-center text-stone-100 font-bold">GitHub API</h1>
        <hr />
        <div className="flex w-[100%] h-[100%] justify-center items-center mt-8">
          <div className="sm:w-[60%] md:w-[18%] md:h-[30%] rounded-md bg-stone-500 p-5">
            <div className="flex justify-center">
              <img
                src={user.data.avatar_url ? user.data.avatar_url : ''}
                alt="imagem de perfil do usuário"
                className="sm:w-[70%] md:w-[50%]  rounded-[50%] "
              />
            </div>
            <br />

           <div className="flex justify-center flex-col">
           <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Nome de usuário: </span>
              {user.data.name}
            </p>
            <br />
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">E-mail: </span>
              {user.data.email ? user.data.email : "E-mail não informado"}
            </p>
            <br />
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Bio: </span>
              {user.data.bio ? user.data.bio : "bio não informada"}
            </p>
            <br />
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Número de seguidores: </span>
              {user.data.followers}
            </p>
            <br />
            <p className="text-gray-100 text-sm/4">
              <span className="font-bold">Número de seguidos: </span>
              {user.data.name}
            </p>
           </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Carregamento</h1>;
  }
}
