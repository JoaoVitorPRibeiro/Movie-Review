import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

import "./Navbar.css"

const Navbar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate() //Constante que vai direcionar o usuário para outra página

    const handleSubmit = (e) => {  //Constante para pegar o que o usuário escrever
        e.preventDefault() //Pegando dado base, sem nada escrito

        if(!search) return
    
        navigate(`/search?q=${search}`) //Aqui eu to direcionando para a página do filme que ele buscou
        setSearch("") //manda um setSeacrh com string vazia para limpar o campo, na nova página que ele foi direcionado
    }

    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <BiCameraMovie/>Critica Filmes
                    </Link>
            </h2>
                <form onSubmit={handleSubmit}> 
                    <input 
                    type="text" 
                    placeholder="Busque um filme" 
                    onChange={(e) => setSearch(e.target.value)} 
                    value={search}
                    />
                    <button type="submit"><BiSearchAlt2/></button>
                </form>
            </nav>
    )
};

export default Navbar;