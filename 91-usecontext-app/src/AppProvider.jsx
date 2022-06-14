import React from "react";
// Este es un componente que se encargará de realizar todos los cambios de datos
// e información, generar, despachar, etc.
// También va a inyectar un contexto dentro de los componentes hijos.
// Recibe dentro de las props la propiedad children, que son simplemente todos los objetos 
// contenidos dentro de la llamada a AppProvider, en este caso va a ser toda la aplicación.

import { useContext, useReducer } from "react";

// Generamos un contexto, es el objeto que nos va a permitir enlazar datos y compartirlos
// con el resto de los componentes.

const AppContext = React.createContext();


// Hook personalizado
// Creamos un hook personalizado para evitar tener que exportar el AppContext y utilizar el useContext
// en cada uno del los componentes componentes específicos en donde vamos a consumir la información.
const useAppContext = () => {
    return useContext(AppContext)
}


const initialState = {
    productos: [],
    presupuesto: 150,
}


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_PRODUCT': 
            return {
                ...state,
                productos: [...state.productos, action.value]
            }
        default: 
            return state;
    }
}


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // La interfaz gráfica que retorna este provider es la utilización
    // de este propio contexto
    return (
        // Lo que quiero es que cualquier componente que este dentro del Provider pueda leer las propiedades presupuesto y
        // productos del state, y tambien puedan acceder a la función dispatch.
        <AppContext.Provider value={{ presupuesto: state.presupuesto, productos: state.productos, dispatch}}>
            { children }
        </AppContext.Provider>
    )
}


export {
    AppProvider,
    useAppContext
}