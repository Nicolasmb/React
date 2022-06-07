import { render } from '@testing-library/react'
import PrimeraApp from '../PrimeraApp'

describe('Pruebas en <PrimeraApp /> ', () => { 

    test('Debe mostrar el mensaje Hola Campeon', () => {
        
        const saludo = "Hola campeon";

        // Almacenamos en una variable el producto renderizado de lo que yo quiero mostrar, osea, del componente React
        const wrapper = render(<PrimeraApp saludo={ saludo } />);

        // Esperamos que el contenedor tenga el texto de la variable saludo en el documento.
        expect( wrapper.getByText(saludo) ).toBeInTheDocument();

    })
})