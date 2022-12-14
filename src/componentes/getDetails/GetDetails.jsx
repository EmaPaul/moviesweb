import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Spinner from '../Spinner/Spinner';
import Trailer from '../Trailer/Trailer';
import placeholder2 from '../imagenes/placeholder2.jpg';
import'./GetDetails.css'

export default function GetDetails() {
    const [loading,setLoading] = useState(true);
    const { movieId } = useParams();
    const [movie,setMovie]=useState(null);

    useEffect(()=>{
      setLoading(true);
        fetch("https://api.themoviedb.org/3/movie/"+movieId+"?api_key="+process.env.REACT_APP_KEY).then(res=>res.json())
        .then((data)=>{
            setLoading(false)
            setMovie(data)
        })
    },[movieId])

    if(loading){
      return <Spinner/>
    }
    
    if(!movie){
        return null
    }
    const urlImage=movie.poster_path?"https://image.tmdb.org/t/p/w500/"+movie.poster_path:placeholder2
    return (
    <div className="detailsContainer">
        <img
        className="col movieImage"
        src={urlImage}
        alt={movie.title}
      />
      <div className="col movieDetails">
        <p className="firstItem">
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview?movie.overview:"There is no description 😟"}
        </p>
      </div>
      <Trailer/>
    </div>
  )
}
