//Style
import './App.css'



//Paginas
import Inicio  from './Paginas/Inicio/Inicio.jsx'
import Bibliografia from './Paginas/Bibliografia/Bibliografia.jsx'
import Discografia from './Paginas/Discografia/Discografia.jsx';

import { Link,Routes,Route } from "react-router";

function App() {

  return (
    <div className="flex flex-col items-center justify-center gap-10 bg-black h-full w-full"
  > 
      <nav className='h-20 w-90 mt-10 text-base shadow-lg shadow-yellow-500/70 rounded-xl flex items-center justify-center bg-amber-600'>
        <ul className='flex gap-5 '>
          <li> <Link to="/">Inicio</Link> </li>
          <li> <Link to='/Bibliografia'>Bibliografia</Link> </li>
          <li> <Link to='/Discografia'>Discografia</Link> </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Bibliografia' element={<Bibliografia/>}/>
        <Route path='/Discografia' element={<Discografia/>}/>
      </Routes>
      



    </div>
  )
}


export default App
/*

*/
