import { API_URL } from "../config/api"

const API_URL_CHARACTER = API_URL + '/character'

export type CharacterOrigin = {
    name: string,
    url: string
}
export type CharacterLocation = {
    name: string
    url: string
}

export type Character = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: CharacterOrigin
    location: CharacterLocation
    image: string
    episode: string[]
    url: string
    created: string
}

export async function getCharacters(page = 1): Promise<Character[]> {
    const response = await fetch(`${API_URL_CHARACTER}?page=${page}`)
    const body = await response.json();
    return body.results
}