import { useEffect, useState } from "react";
import "../movies.css"

export default function AllMovies(){
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
      const url = "https://imdb-top-100-movies1.p.rapidapi.com";
      const res = await fetch(url, {
        headers: {
          "X-RapidAPI-Key": "cc080d0331mshef34f0d79835fc3p114f9cjsn03cfab57adff",
          "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
        },
      });
      setMovies(await res.json());
    };
    useEffect(()=>{
      getMovies()
      },[])
    
    return (
      <>
        <h1 className="title">Top Movies</h1>
        <div className="card-container">
          {movies.length &&
            movies.map((movie) => (
              <div className="card" style={{width:"18rem"}}key={movie.id}>
                <img src={movie.images[0][1]} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description.slice(0, 100)} ...</p>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  };