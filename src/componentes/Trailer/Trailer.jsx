import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SinTrailer from '../SinTrailer/SinTrailer';
import Spinner from '../Spinner/Spinner';
import './Trailer.css'

export default function Trailer() {
    const { movieId } = useParams();
    const [video, setVideo]=useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        setLoading(true);
        fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key="+process.env.REACT_APP_KEY).then(res=>res.json())
        .then((data)=>{
            
            const trailer = data.results.find(
                (vid) => vid.type === "Trailer"
            );
            setLoading(false)
            setVideo(trailer?trailer:data.results[0])
        }).catch(err=>console.log(err))
    },[movieId])
    if(!loading && !video){
        return <SinTrailer/>
    }
    
    if(loading){
        return <Spinner/>
    }
    let url = 'https://www.youtube.com/embed/' + video.key
  return (
    <div className="trailer" >
       <iframe
            className='ventana'
            title="Official Trailer"
            allowFullScreen
            src={url}
        ></iframe>
    </div>
  )
}
