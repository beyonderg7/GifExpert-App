

import { screen, render, fireEvent } from "@testing-library/react";
import { GifItem } from "../../src/Componentes/GifItem";

describe('Pruebas en GifItem', () => {
    

    test('Debe hacer match con el snapshot', () => {


        const title =  'Goku gafas';
        const url = 'https://media.giphy.com/media/125cxELHOpsLra/giphy.gif'
        const {container} = render(<GifItem title={title} url={url}></GifItem>);

        expect(container).toMatchSnapshot();
     })
 })