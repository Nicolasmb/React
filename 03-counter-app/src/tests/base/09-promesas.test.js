import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('Pruebas con promesas', () => { 

    test('getHeroesByIdAsync debe retornar un Héroe async', (done) => { 
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then( heroe => {
                expect(heroe).toBe(heroes.find(h => h.id === id));
                done();
            })

    });


    test('Debe obtener un error si el héroe con id no existe', (done) => { 
        
        const id = 100;

        getHeroeByIdAsync(id)
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done()
            })
    })
})