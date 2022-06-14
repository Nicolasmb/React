import { useAppContext } from "../AppProvider";


const Lista = () => {
    
    const { productos } = useAppContext();
    let lista = <h5>No existe ningun producto</h5>;
    if (productos.length > 0 ) {
        lista = (
            <ul className="list-group">
                {productos.map(producto => (
                    <li className="list-group-item">
                        {producto.nombre} ({producto.unidades}) ${producto.precio}
                    </li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <h3>Lista Productos</h3>
            { lista }
        </>
    )
}

export default Lista