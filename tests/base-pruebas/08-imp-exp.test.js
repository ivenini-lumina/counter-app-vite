import {getHeroeById, getHeroesByOwner} from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas de 08-imp-exp', () => { 
    test('getHeroeByID debe retornar un heroe por id si existe' , () => { 

        const id = 1;
        const resultHeroe = getHeroeById(id);

        expect(resultHeroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });        
    });

    test('getHeroeByID debe retornar undefined si no existe' , () => { 

        const id = 100;
        const resultHeroe = getHeroeById(id);

        expect(resultHeroe).toBe(undefined);        
        expect(resultHeroe).toBeFalsy();
    });

    test('Prueba de getHeroesByOwner' , () => { 

        const dc = 'DC';
        const resultDC = getHeroesByOwner(dc);

        expect(resultDC).toEqual(
            [{"id": 1, "name": "Batman", "owner": "DC"}, 
            {"id": 3, "name": "Superman", "owner": "DC"}, 
            {"id": 4, "name": "Flash", "owner": "DC"}]); 

        expect(resultDC.length).toBe(3);

        const mv = 'Marvel';
        const resultMV = getHeroesByOwner(mv);

        expect(resultMV.length).toBe(2);

    });

});