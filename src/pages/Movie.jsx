import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import MovieCard from "../components/MovieCard";

import "./Movie.css"

const moviesURL = import.meta.env.VITE_API; //Importando os dados da API
const apiKey = import.meta.env.VITE_API_KEY; //Importando o API KEY

const Movie = () => {
    const {id} = useParams()
    const [movie, setMovie] = useState(null)

    const getMovie = async (url) => {
        const res = await fetch(url); //Pegando os dados da API
        const data = await res.json(); //Convertendo em JSON
        
        setMovie(data);
    }

    const formatCurrency = (number) => { //Para arrumar o jeito que o dado de dinheiro vem, passando para Dolar
        return number.toLocaleString("en-us", {
            style: "currency",
            currency: "USD",
        })
    }

    useEffect(() =>{
        const movieURL = `${moviesURL}${id}?${apiKey}`
        getMovie(movieURL)
    },[])

    return (
        <div className="movie-page">
            {movie && (
                <>
                <MovieCard movie={movie} showLink={false} />
                <p className="tagline">{movie.tagline}</p>
                <div className="info">
                    <h3>
                        <BsWallet2 /> Orçamento:
                    </h3>
                    <p>{formatCurrency(movie.budget)}</p>
                </div>
                <div className="info">
                    <h3>
                        <BsGraphUp /> Faturamento:
                    </h3>
                    <p>{formatCurrency(movie.revenue)}</p>
                </div>
                <div className="info">
                    <h3>
                        <BsHourglassSplit /> Duração:
                    </h3>
                    <p>{movie.runtime} minutos</p>
                </div>
                <div className="info description">
                    <h3>
                        <BsFillFileEarmarkTextFill /> Descrição:
                    </h3>
                    <p>{movie.overview}</p>
                </div>
                </>
            )}
        </div>
        )
};

export default Movie;