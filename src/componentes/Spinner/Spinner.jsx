import { ImSpinner5 } from 'react-icons/im';
import './Spinner.css';

export default function Spinner() {
  return (
    <div className="spinner">
        <ImSpinner5 className="spinning" size={60}/>
    </div>
  )
}
