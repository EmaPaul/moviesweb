import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import './Search.css';


export default function Search() {

  const [searchText,setSearchText]=useState("")
  let navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    if(searchText!==""){
      navigate("/?movie="+searchText);
      setSearchText("")
    }
  }

  return (
    <form className="searchContainer" onSubmit={handleSubmit}>
        <div className="searchBox">
            <input 
              className="searchInput" 
              type="text" 
              placeholder="Search Movies ...." 
              value={searchText} 
              onChange={(e)=>setSearchText(e.target.value)}
            />
            <button className="searchButton" id="boton"><FcSearch size={19}/></button>
        </div>
    </form>
  )
}
