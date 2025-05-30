//Style
import './App.css'



//Paginas
import Inicio  from './Paginas/Inicio/Inicio.jsx'
import Bibliografia from './Paginas/Bibliografia/Bibliografia.jsx'
import Discografia from './Paginas/Discografia/Discografia.jsx';

import { Link,Routes,Route } from "react-router";
//bg-radial-gradient(circle,rgb(85, 84, 84) 0%, rgba(240, 19, 19, 1) 100%)

function App() {

  return (
    <div className="flex flex-col items-center justify-center bg-red-500"
  > 
      <nav className='h-50 w-190 mt-10 text-base shadow-lg shadow-yellow-500/70 rounded-xl flex items-center justify-center bg-amber-600'>
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
