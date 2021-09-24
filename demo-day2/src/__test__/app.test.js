import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../app.js'

describe('react app', () => {
    it('should loads and displays default value', async () => {
        //arrange
        render(<App />);
        //act
        const name = await waitFor(() => screen.getByTestId('name'));
        //assert
        expect(name).toHaveTextContent("someone");
    });
    it('should change the name value', async () => {
        //arrange
        render(<App />);
        const input = screen.getByTestId('name-input')
        const name = screen.getByTestId('name');
        //act
        fireEvent.change(input, { target: { value: 'new name' } })
        //assert
        expect(name).toHaveTextContent('new name');
    });
    it('should update the counter', async () => {
        //arrange
        render(<App />);
        const button = screen.getByText('update click count')
        const counter = screen.getByTestId('counter')
        //act
        fireEvent.click(button)
        // fireEvent.click(button)
        // fireEvent.click(button)
        //assert
        expect(counter).toHaveTextContent('1');
        // expect(counter).toHaveTextContent('2');
        // expect(counter).toHaveTextContent('3');

    });
})