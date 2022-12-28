import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import testHeroes from '../../src/data/heroes';

describe('Pruebas en 08-imp-exp', () => {
   
    test('getHeroeById debe de retornar un héroe por ID', () => {
        // Sujeto de pruebas: la función getHeroeById
        // Arrange
        const id = 1;
        // Act
        const heroe = getHeroeById(id);
        // Assert
        expect( heroe ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });

    test('getHeroeById debe de retornar undefined si no existe', () => {
        // Sujeto de pruebas: la función getHeroeById
        // Arrange
        const id = 100;
        // Act
        const heroe = getHeroeById(id);
        // Assert
        expect( heroe ).toBeFalsy();
    });

    test('getHeroeByOwner debe de retornar una arreglo con los héroes de DC', () => {
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect( heroes.length ).toBe( 3 );
        expect( heroes ).toEqual( testHeroes.filter(heroe => heroe.owner === owner) );

    })
});