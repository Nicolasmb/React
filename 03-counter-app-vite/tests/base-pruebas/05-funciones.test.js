import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {
        
        // Arrange, en este caso de prepara un objeto para la prueba
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        // Act, se ejecuta la acción que se esta probando.
        const user = getUser();

        // Assert, se verifica si el resultado de la prueba es el esperado.
        expect( testUser ).toStrictEqual( user );
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {

        // Arrange
        const name = 'Nicolas';

        // Act
        const activeUser = getUsuarioActivo(name);

        // Assert
        expect( activeUser ).toStrictEqual({
            uid: 'ABC567',
            username: name,
        });
        
    });
    
});