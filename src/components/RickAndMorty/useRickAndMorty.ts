import { useCallback, useEffect, useMemo, useState } from "react"
import { Character, getCharacters } from "../../services/rickAndMorty"
import { createTheme } from "@mui/material";



function useRickAndMorty() {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false);
    const [characters, setCharacters] = useState<Character[]>([])
    const [error, setError] = useState<Error>();
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const toggleColorMode = useCallback(() => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    }, [])


    const theme = useMemo(() =>
        createTheme({
            palette: {
                mode,
            },
        }), [mode])



    const handlePagination = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);

    };

    useEffect(() => {
        (
            async () => {
                try {
                    setIsLoading(true)
                    const { info, results } = await getCharacters(page)
                    setCount(info.pages)
                    setCharacters(results)
                } catch (error) {
                    console.error(error)
                    setError(error as Error)
                    setIsError(true)
                } finally {
                    setIsLoading(false)
                }
            }
        )()
    }, [page])


    return { characters, isLoading, isError, error, count, page, handlePagination, theme, toggleColorMode }
}
export default useRickAndMorty