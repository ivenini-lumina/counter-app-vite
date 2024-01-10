import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en Template string', () => {

    test('La funcion getSaludo debe devolver "Hola Fernando"', () => { 

        // 1. arrange    
        const nombre = 'Fernando';
        
        // 2. act
        const mensaje = getSaludo(nombre);
    
        // 3. assert
        expect(mensaje).toBe(`Hola ${nombre}`);
    
    });
});

