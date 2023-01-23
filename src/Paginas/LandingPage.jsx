import { useSearchParams } from "react-router-dom";
import GetPeliculas from "../componentes/getPeliculas/GetPeliculas";
import Search from "../componentes/Search/Search";
// import useQuery from '../hooks/useQuery.jsx'

export default function LandingPage() {
  // const query =useQuery()
  // const search = query.get('movie')
  const [query] = useSearchParams()
  const search = query.get('movie')
  return (
    <div> 
      <Search/> 
      <GetPeliculas key={search}/>
    </div>
  );
}