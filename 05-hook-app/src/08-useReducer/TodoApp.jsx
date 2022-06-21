import { useReducer } from "react"
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer"

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false,
    }
]

export const TodoApp = () => {

    const [ todos, dispatchTodo ] = useReducer( todoReducer, initialState );

    const handleNewTodo = ( todo ) => {
        console.log({ todo });
    }

    return (
        <>
            <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    <TodoList todos={ todos }/>

                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    {/* TodoAdd onNewTodo( todo */}

                    <form>
                        <input 
                            type="text"
                            placeholder="¿Qué hay que hacer?"
                            className="form-control"
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1">
                            Agregar
                        </button>
                    </form>
                    {/* Fin de TodoAdd */}
                </div>
            </div>

        </>
    )
}
