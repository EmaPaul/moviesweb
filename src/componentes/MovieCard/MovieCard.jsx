import { Link } from 'react-router-dom';
import placeholder from '../imagenes/placeholder.jpg';
import './MovieCard.css';
export function MovieCard({ movie }) {
  const toTheTop =()=>{
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }
    const imageUrl = movie.poster_path?"https://image.tmdb.org/t/p/w300" + movie.poster_path:placeholder;
    return (
      <li className="movieCard">
        <Link to={"/movies/"+movie.id}> 
        <img
            width={230}
            height={345}
            className="movieImage"
            src={imageUrl}
            alt={movie.title}
            onClick={toTheTop}
         />
        <div>{movie.title}</div>
        </Link>
      </li>
    );
  }