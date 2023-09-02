import { useEffect, useState } from "react"
import { Character, getCharacters } from "../../services/rickAndMorty"



function useRickAndMorty() {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState<Character[]>([])
    const [error, setError] = useState<Error>();


    useEffect(() => {
        (
            async () => {
                try {
                    setIsLoading(true)
                    const data = await getCharacters()
                    setCharacters(data)
                } catch (error) {
                    console.error(error)
                    setError(error as Error)
                    setIsError(true)
                } finally {
                    setIsLoading(false)
                }
            }
        )()
    }, [])


    return { characters, isLoading, isError, error }
}
export default useRickAndMorty