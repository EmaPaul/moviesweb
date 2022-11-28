import './Paginacion.css';

export default function Paginacion({ pageFunction, current,maxValue}) {
    function handlePrevious(e){
        e.preventDefault();
        pageFunction(current-1);
    }
    function handleNext(e){
        e.preventDefault();
        pageFunction(current+1)
    }

  return (
    
        
    <div className="paginacion">
        <button className="prev" onClick={(e)=>handlePrevious(e)} disabled={current<=1}>Previous</button>
        <button className="next" onClick={(e)=>handleNext(e)}disabled={current>=maxValue}>Next</button>
    </div>
  )
}
