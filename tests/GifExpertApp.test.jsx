import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";


describe('Pruebas en el component GifExpertApp', () => { 

    test('', () => { 


           const {container} = render(<GifExpertApp></GifExpertApp>)


            expect(container).toMatchSnapshot();

            





     });


 });