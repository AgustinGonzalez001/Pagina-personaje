import './Inicio.css'
//iconos
import Card from "../../Style/Carrucel-Inicio.tsx"
import Loader from "../../Style/Tituto.tsx";

function Inicio(){
    return(
        <div className='flex flex-col justify-center align-center w-screen h-full'>
            <Loader/>
            <Card/> 
        </div>
        
    )
}

export default Inicio;

/*
*/