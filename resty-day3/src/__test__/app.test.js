import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../app.js'
import Results from '../components/results'

describe('react app', () => {
    it('should loads and displays default value', async () => {
        //arrange
        render(<App />);
        //act
        const method = await waitFor(() => screen.getByTestId('method'));
        const url = await waitFor(() => screen.getByTestId('url'));
        //assert
        expect(method).toHaveTextContent("Request Method:");
        expect(url).toHaveTextContent("URL:");
    });
    it('should render in the output area', async () => {
        //arrange
        const raw = await fetch('https://pokeapi.co/api/v2/pokemon');
        let data = await raw.json();
        let results = Object.entries(data.results);
        //act
        render(<Results data={results} />);
        //assert
        expect(results).toBeTruthy();

    });
})