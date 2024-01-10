import  { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en CounterApp", () =>{

    const initialValue = 10;

    test("Debe hacer match con el snapshot", () =>{

        const { container } = render(<CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();

    });

    test("Debe de mostrar el valor inicial de 100 <CounterApp value={ 100 } /> ", () =>{

        const { container } = render(<CounterApp value={ 100 } />);
        expect (screen.getByText(100)).toBeTruthy();
        // expect (screen.getByRole("heading", { level: 2} ).innerHTML).toContain('100');
        
    });

    test("Debe de incrementar al hacer clic en +1 ", () =>{
        const { container } = render(<CounterApp value={ initialValue } />);
        fireEvent.click(screen.getByText('+1'));
        expect (screen.getByText(initialValue+1)).toBeTruthy();        
    });

    test("Debe de decrementar al hacer clic en -1 ", () =>{
        const { container } = render(<CounterApp value={ initialValue } />);
        fireEvent.click(screen.getByText('-1'));
        expect (screen.getByText(initialValue-1)).toBeTruthy();        
    });

    test("Debe de resetear al hacer clic en reset ", () =>{
        const { container } = render(<CounterApp value={ 355 } />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole("button", { name: 'btn-reset'} ));
        expect (screen.getByText(355)).toBeTruthy();        
      
    });    

})