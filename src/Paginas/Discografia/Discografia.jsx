import ScrollTriggered from "../../Style/Imagenes";

function Discografia(){
    return(
        <>
            <p className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-9xl font-bold font-sans rounded-xl p-5">
                Michael Jackson
            </p>
            <p className="font-mono text-5xl w-350 h-auto p-20 bg-indigo-600/40 shadow-lg shadow-indigo-500/95 rounded-xl flex items-center justify-center flex-col">
                El álbum más vendido de Michael Jackson, y uno de los más vendidos en la historia de la música, 
                es "Thriller". Con más de 70 millones de copias vendidas en todo el mundo, este disco de 1982 
                ha superado las expectativas y continúa siendo un éxito. 
                <a href="https://www.youtube.com/watch?v=sOnqjkJTMaA">
                <img className="rounded-full p-5"
                src="https://i.ebayimg.com/images/g/S5sAAOSwFWJk55XQ/s-l1600.webp" alt="" />
                </a>
                Tambien saco grandes álbumes populares como los precentados a continuacion.
                </p>
                <img className="h-100 w-100" src="https://svgsilh.com/svg/149964-e91e63.svg" alt="" />
            <ScrollTriggered/>
        </>
    )
}

export default Discografia;


