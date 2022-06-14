import { useState } from "react";
import { useAppContext } from "../AppProvider";

const Formulario = () => {
    
    const { dispatch } = useAppContext();

    const [nombre, setNombre] = useState('');
    const [unidades, setUnidades] = useState(0);
    const [precio, setPrecio] = useState(0);

    const handleSubmit = (event) => {
        // Detenemos la ejecución normal del formulario.
        // No va a realizar un refresco de pagina.
        event.preventDefault();
        const producto = { 
            nombre, 
            unidades: parseInt(unidades), 
            precio: parseFloat(precio)
        }
        dispatch({
            type: 'ADD_PRODUCT',
            value: producto
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input 
                    type="text" 
                    className="form-control"
                    onChange={(event) => setNombre(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Unidades</label>
                <input 
                    type="text" 
                    className="form-control"
                    onChange={(event) => setUnidades(event.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Precio</label>
                <input 
                    type="text" 
                    className="form-control"
                    onChange={(event) => setPrecio(event.target.value)}
                />
            </div>
            <input type="submit" className="btn btn-info" value="Enviar" />
        </form>
    )

}

export default Formulario;