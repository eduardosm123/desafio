import {render, screen} from '@testing-library/react';
import Button from '../Button';

describe('Test Button',  ()=> {
    it('test render', async ()=> {
        render(<Button />)
        const idElement = await screen.findByTestId("button");
        expect(idElement).toBeInTheDocument();
        
    })
})