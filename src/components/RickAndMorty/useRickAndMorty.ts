import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "../../services/rickAndMorty"



function useRickAndMorty() {

    const query = useQuery({
        queryKey: ['rickAndMorty'],
        queryFn: async () => await getCharacters()
    })


    return query
}
export default useRickAndMorty