import { useAppContext } from "../AppProvider";



const Presupuesto = () => {
    
    const { presupuesto, productos } = useAppContext();

    const calcularTotal = () => {
        let total = 0;
        if (productos.length > 0) {
            total = productos.reduce((amount, producto) => {
                return amount + (producto.precio * producto.unidades);
            }, 0)
        }
        return total;
    }
    

    return (
        <>
            <div className="alert alert-warning text-center">
                Presupuesto:
                <span className="d-block">$ { presupuesto - calcularTotal() }</span>
            </div>
        </>
    )
}

export default Presupuesto;