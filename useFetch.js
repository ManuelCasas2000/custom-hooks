import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {
        setState({
            ...state,
            isLoading: true // Antes de conseguir los datos lo pongo en "cargando"
        })
        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: null
        })
    }

    useEffect(() => { // Aqui queremos disparar la petición fetch
        getFetch();
    }, [url]) // cada vez que el url cambie se lanza este useEffect

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
