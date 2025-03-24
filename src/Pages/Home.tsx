import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store.ts";
import { getUser } from "../Api/github";
import { setUsername, setUser } from "../Redux/Reducer/userSlice.ts";
import { IUser } from "../Interfaces/User.ts";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const username = useSelector((state: RootState) => state.user.data.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    async function getUserByName() {
      try {
        if (username) {
          const user: any = await getUser(username);
          const newUser: IUser = {
            data: {
              name: user.login ? user.login : "",
              avatar_url: user.avatar_url ? user.avatar_url : "",
              bio: user.bio ? user.bio : "",
              followers: user.followers ? user.followers : 0,
              following: user.following ? user.following : 0,
              email: user.email ? user.email : ''
            },
          };

           
          dispatch(setUser(newUser.data));
          navigate("/user");
        }
      } catch (error) {
        console.log(error);
      }
    }
    getUserByName();
  };

  return (
    <div className="bg-gray-800 min-h-screen w-full">
      <h1 className="text-center text-stone-100 font-bold">GitHub Desafio</h1>
      <hr />
      <div className="flex flex-col justify-center items-center mt-[10%] w-full">
        <form onSubmit={handleSubmit} className="sm:w-[40%] md:w-[30%]">
          <label className="font-bold text-stone-100">
            Digite o nome do usuário: 
          </label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Digite o nome do usuario"
            value={username || '' }
            className="placeholder-gray-100 text-gray-100 border-1 border-white w-[100%]"
            onChange={(e) => dispatch(setUsername(e.target.value))}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Buscar"
            className="bg-green-400 px-3 py-1 rounded-md text-stone-100"
          />
        </form>
      </div>
    </div>
  );
}