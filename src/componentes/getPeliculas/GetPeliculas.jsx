import { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
// import useQuery from "../../hooks/useQuery";
import About from "../About/About";
import { MovieCard } from "../MovieCard/MovieCard";
import NoResults from "../NoResults/NoResults";
import Paginacion from "../Paginacion/Paginacion";
import Spinner from "../Spinner/Spinner";
import './GetPeliculas.css';

export default function GetPeliculas() {
    const [movies,setMovies]=useState([]);
    const [loading,setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [max,setMax]=useState(1)
    
    // const query =useQuery()
    // const search = query.get('movie')

    const [query] = useSearchParams()
    const search = query.get('movie')

    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    
    
    useEffect(()=>{
      setLoading(true);
      const searchUrl = search?"/search/movie?api_key="+process.env.REACT_APP_KEY+"&query="+search+"&page="+currentPage:"/discover/movie?api_key="+process.env.REACT_APP_KEY+"&page="+currentPage
      fetch("https://api.themoviedb.org/3"+searchUrl).then(res=>res.json())
      .then((data)=>{
        setLoading(false)
        setMovies(data.results)
        setMax(data.total_pages) 
      })
        
    },[search,currentPage])

    if(!loading && movies.length===0){
      return <NoResults/>
    }

    if(loading){
      return <Spinner/>
    }
   
    return (
    <div>
      <Paginacion pageFunction={paginado} current={currentPage} maxValue={max} />
      <About/>
      <ul className="movieGrid">
      {movies.map((movies)=>( 
       <MovieCard key={movies.id} movie={movies}/>
      ))}
      
    </ul>
    </div>
  )
}
