import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUsuario debe de retornar un objeto', () => { 

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const resUser = getUser();

        expect(resUser).toEqual(testUser);
    
    });

    test('getUsuarioActivo debe de retornar un objeto', () => { 

        const nombre = 'Fernando';

        const testUser = {
            uid: 'ABC567',
            username: nombre
        };

        const resUser = getUsuarioActivo(nombre);

        expect(resUser).toStrictEqual(testUser);        
    });
});

