import { render, screen, fireEvent } from '@testing-library/react'
import RickAndMorty from './RickAndMorty'

describe('RickyAndMorty Component', () => {
    beforeEach(() => {
        render(<RickAndMorty />)
    })
    test('it should render title in the navbar', () => {
        expect(screen.getByText('Rick And Morty Challenge')).toBeDefined()
    })
    test('It should show the light theme when loading the page for the first time', () => {
        expect(screen.getByTestId('dark')).toBeDefined()
    })
    test('It should show the dark theme when you click the light theme button for the first time', () => {
        const themeBtn = screen.getByTestId('dark')
        fireEvent.click(themeBtn)
        expect(screen.getByTestId('light')).toBeDefined()

    })
    test('It should show the spinner when loading the page', () => {
        expect(screen.getByText(/Bringing data/gi)).toBeDefined()
    })

})