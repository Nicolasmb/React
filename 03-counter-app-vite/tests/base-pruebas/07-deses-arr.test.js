import { string } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    
    test('debe de retornar un string y un número', () => {

        // Sujeto de pruebas: el valor de retorno de la funcion retornarArreglo()

        // Arrange: 
        // En esta parte se preparan los datos necesarios para la prueba. 
        // En este caso, se está llamando a la función retornaArreglo() y asignando 
        // el resultado a una variable destructurada llamada letters y numbers.
        const [ letters, numbers ] = retornaArreglo();

        // Act:
        // No hay una parte "Act" explícita en este código, ya que la acción que se 
        // está probando (llamar a la función retornaArreglo()) ya se ha realizado 
        // en la parte "Arrange".

        // Assert:
        // En esta parte se verifica si el resultado de la prueba es el esperado.
        // En este caseo, se están utilizando las funciones 'expect' junto con los métodos
        // 'toBe' para comprobar que el tipo de dato de 'letters' es una cadena de caracteres
        // y que el tipo de dato de 'numbers es un número.
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        expect( letters ).toEqual( expect.any(String) );
    });
});
