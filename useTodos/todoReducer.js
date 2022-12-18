
export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            console.log("todoReducer -> case '[TODO] Add Todo'");
            return [...initialState, action.payload]
                // Aqui devuelvo un nuevo estado -> En este caso, un array. Lo hacemos usando el comando Spread
                // En "action.payload" voy a tener el nuevo Todo, es decir, lo que quiero insertar
        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload); // En el payload mando el id que quiero borrar
            // la funcion 'filter' NO muta el array: Me devuelve un array sin el elemento que le he indicado
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload) { // En action.payload esta el id que quiero cambiar
                    return {
                        ...todo,
                        done: !todo.done // Lo contrario a como esté antes   
                    }
                }
                return todo;
            })
        case 'ABC':
            throw new Error('La action.type = ABC no está implementada.')
            break;
    
        default:
            return initialState;
    }
}
