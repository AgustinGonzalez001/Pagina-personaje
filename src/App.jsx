//Style
import './App.css'



//Paginas
import Inicio  from './Paginas/Inicio/Inicio.jsx'
import Bibliografia from './Paginas/Bibliografia/Bibliografia.jsx'
import Discografia from './Paginas/Discografia/Discografia.jsx';

import { Link,Routes,Route } from "react-router";


function App() {

  return (
    <div className="grid justify-items-center gap-15"> 
      <nav className='h-50 w-400 mt-15 text-6xl shadow-lg shadow-yellow-500/70 rounded-xl flex items-center justify-around bg-amber-600'>
        <ul className='flex gap-45 '>
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
