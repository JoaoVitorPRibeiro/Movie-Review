import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

import "./MoviesGrid.css"

const moviesURL = import.meta.env.VITE_API; //Importando os dados da API
const apiKey = import.meta.env.VITE_API_KEY; //Importando o API KEY

const Home = () => {
    const [topMovies, setTopMovies] = useState([]); //To mandando os dados 
  
    const getTopRatedMovies = async (url) => { //Pegando (get) os dados de filmes melhores avaliados
      const res = await fetch(url); //Pegando os dados da API
      const data = await res.json(); //Convertendo em JSON
      setTopMovies(data.results); //Mandando os dados que estão na categoria "results" dos dados que vieram no objeto (JSON)
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`; 

        getTopRatedMovies(topRatedUrl); //Pegando os dados e mostrando na TELA
      }, []);

    return (
        <div className="container">
            <h2 className="title">Melhores filmes!</h2>
            <div className="movies-container">
                {topMovies.length === 0 && <p>Carregando...</p>}
            {topMovies.length > 0 && 
                topMovies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default Home;