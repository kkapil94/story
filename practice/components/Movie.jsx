import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { getMovie } from "../slices/movieSlice";

export default function Movie(){
    const {id} = useParams();
    const dispatch = useDispatch()
    const {movie} = useSelector(store=>store.movie)
    // const [movie,setMovie] = useState(null)
    const fetchMovie =async (id)=>{
        const data = await fetch(`https://imdb-top-100-movies1.p.rapidapi.com?id=${id}`,{
            headers: {
                'X-RapidAPI-Key': '3f43a54079msh58e1793bce0ca26p190101jsna9e21c1eded5',
                'X-RapidAPI-Host': 'imdb-top-100-movies1.p.rapidapi.com'
            }
        })
        const res =await data.json();
        dispatch(getMovie(res))
    }
    useEffect(() => {
      fetchMovie(id)
    }, [])
    
    return(
        <>
            {movie&&<div className="movie-container">
                <div id="div1">
                    <img src={movie?.images?.[0][1]} alt="" />
                </div>
                <div id="div2">
                    <h2>{movie.title}</h2>
                    <p>Desc: {movie.description}</p>
                    <div>
                        <span>Starcast: </span>
                        <span>{movie?.Stars?.join(", ")}</span>
                    </div>
                    <span>Rating: {movie.rating}</span>
                    <span>Released in: {movie.year}</span>
                </div>
            </div>}
        </>
)}

