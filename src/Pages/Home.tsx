import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/store.ts";
import { getUser } from "../Api/github";
import { setUsername } from "../Redux/Reducer/userSlice.ts";

export default function Home() {
  const username = useSelector((state: RootState) => state.user.name);
  const dispatch = useDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    async function getUserByName() {
      try {
        const user: any = await getUser(username);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    }
    getUserByName();
  };

  return (
    <div>
      <h1 className="text-center">GitHub API</h1>
      <hr />
      <div  >
        <form onSubmit={handleSubmit}>
          <div  >
          <label>
            Digite o nome de um usuário
            <input
              type="text"
              placeholder="Digite o nome de um usuário"
              value={username}
              onChange={(e) => dispatch(setUsername(e.target.value))}
            />
          </label>
          <input type="submit" value="Buscar"  />
          </div>
        </form>
      </div>
    </div>
  );
}
