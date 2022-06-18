import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category );
  

    return (
        <>
            <h3>{ category }</h3>
            { isLoading && ( <h2>Cargando...</h2> ) }

            <div className="card-grid">
                {/* Podemos esparcir las propiedades de un objeto en props */}
                { images.map( img => <GifItem key={ img.id } { ...img } />) }
            </div>

        </>
    )
}
