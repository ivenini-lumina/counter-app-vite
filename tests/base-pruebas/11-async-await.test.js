import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await', () => { 

    test('El getImagen debe retornar un error cuando hay problemas con la api key', async () => {

        const url = await getImagen();
        expect(url).toBe('No se ha encontrado la imagen');

    });

});