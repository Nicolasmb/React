import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [ todos, dispatch] = useReducer( todoReducer, initialState, init );

    // Este efecto nos ayuda a que cada vez que cambien los 'todos', se guarden en el local storage.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos) || [] ) // LocalsStorage es una API que ya viene con JavaScript
    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch( action );
    }
    
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done ).length,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo
    }
}