import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; 
  }

export const useTodos = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init); // He quitado el initialState y he puesto []
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    const handleNewTodo = (todo) => { 
        console.log("handleNewTodo: " + JSON.stringify(todo));
        const action = {
          type: '[TODO] Add Todo',
          payload: todo
        } 
        dispatch(action);
      }
    
      const handleDeleteTodo = (id) => {
        dispatch({
          type: '[TODO] Remove Todo',
          payload: id
        });
      }
    
      const handleToggleTodo = (id) => {
        dispatch({
          type: '[TODO] Toggle Todo',
          payload: id
        });
    
      }
  
  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount, 
    pendingTodosCount,
  }
}
