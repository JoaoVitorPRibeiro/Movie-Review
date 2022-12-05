import { Link } from "react-router-dom"

import {FaStar} from "react-icons/fa"

const imageURL = import.meta.env.VITE_IMG //Importando os dados da imagem pelo link da API

const MovieCard = ({movie, showLink = true}) => {
    return (
        <div className="movie-card">
            <img src={imageURL + movie.poster_path} alt={movie.title}/> 
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    )
}
// No <img> estou pegando o link de imagens da API e mesclando com o dados do poster.path
// no h2 to pegando os dados de título
// FaStar to importando o icon de estrela no vote_average, to pegando o dado de avaliação que vem no JSON 
//Depois to validando se o filme for real, o "Detalhes", na hora do usuário clicar nele, redireciona para a página do filme em especifico
export default MovieCard