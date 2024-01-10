describe('Pruebas en DemoComponet', () => {
    test('Esta prueba no debe fallar', () => { 

        // 1. arrange    
        const m1 = 'Hola mundo';
        
        // 2. act
        const m2 = 'Hola mundo'.trim();
    
        // 3. assert
        expect(m1).toBe(m2);
    
    });
});

