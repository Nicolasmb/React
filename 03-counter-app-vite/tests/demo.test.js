
describe('Pruebas en <DemoComponent />', () => {

    test('Esta prueba no debe de fallar', () => {
       
        // 1. Arrange u inicializar (inicializamos el sujeto de pruebas)
        const message1 = 'Hola Mundo';
    
        // 2. Act o actuar (aplicamos un estimulo al sujeto de pruebas)
        const message2 = message1.trim();
    
        // 3. Assert o afirmar (observar el comportamiento esperado)
        expect( message1 ).toBe( message2);
        
    });

});
