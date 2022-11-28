import './App.css';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import GetDetails from './componentes/getDetails/GetDetails';
import Error404 from './componentes/Error_404/Error404';
import LandingPage from './Paginas/LandingPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/">
        <h1 className="title">🍿 🍿 EMAPELIS 🍿 🍿</h1>
      </Link>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/movies/:movieId" element={<GetDetails/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
