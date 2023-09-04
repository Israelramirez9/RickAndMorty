import { render, screen, fireEvent } from '@testing-library/react'
import { RickAndMorty } from '../components'

describe('RickyAndMorty Component', () => {
    beforeEach(() => {
        render(<RickAndMorty />)
    })
    test('it should render title in the navbar', () => {
        expect(screen.getByText('Rick And Morty Challenge (Sistemas Administrativos S.A)')).toBeDefined()
    })
    test('It should show the light theme when loading the page for the first time', () => {
        expect(screen.getByText('light')).toBeDefined()
    })
    test('It should show the dark theme when you click the light theme button for the first time', () => {
        const themeBtn = screen.findByText('theme-btton')
        themeBtn.then(resp => {
            fireEvent.click(resp)
            expect(screen.getByText('dark')).toBeDefined()
        })
    })
    test('It should show the spinner when loading the page', () => {
        expect(screen.getByText(/Bringying data/gi)).toBeDefined()
    })
   
})