import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import "./MoviesGrid.css"

const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchedMovies = async (url) => { //Pegando (get) os dados de todos os filmes com o nome buscado
        const res = await fetch(url); //Pegando os dados da API
        const data = await res.json(); //Convertendo em JSON
        
        setMovies(data.results); //Mandando os dados que estão na categoria "results" dos dados que vieram no objeto (JSON)
      };
  
      useEffect(() => {
          const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`; 
  
          getSearchedMovies(searchWithQueryURL); //Pegando os dados e mostrando na TELA, todos filmes com o nome buscado
        }, [query]); //Passando o parâmetro query, hora que ele pesquisar outro filme na página de search, ele vai atualizar tudo com o novo filme buscado
  

    return (
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
            {movies.length === 0 && <p>Carregando...</p>}
            {movies.length > 0 && 
                movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default Search;