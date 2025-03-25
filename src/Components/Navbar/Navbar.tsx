import { NavbarProps } from "../../Interfaces/NavbarProps"

export default function  NavBar({ children }: NavbarProps) {



    return (
        <div className="bg-gray-700 min-h-screen w-[100%]" data-testid="NavBar" >
            <h1 className="text-center text-stone-100 font-bold" >GitHub Desafio</h1>
            <hr />
            {children}
        </div>
    )
   
}