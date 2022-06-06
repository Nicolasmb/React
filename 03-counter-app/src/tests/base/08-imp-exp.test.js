import { getHeroeById } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe('Pruebas en funciones que retornan objetos Héroes', () => {
     
    test('Debe retornar un héroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(her => her.id === id);

        expect(heroe).toEqual(heroeData);

    })

    test('Debe retornar undefined si no existe héroe para el id ingresado', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    })
})