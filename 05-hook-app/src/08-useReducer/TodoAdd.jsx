import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { onInputChange, onResetForm, description } = useForm({ 
        description: '' 
    })

    const onSubmit = ( event ) => {
        event.preventDefault();
        if ( description == "") return
        const newTodo = { id: new Date().getTime(), description, done: false };
        onNewTodo(newTodo);
        onResetForm();
    }


    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />

            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="¿Qué hay que hacer?"
                    className="form-control"
                    name="description"
                    value={ description }
                    onChange={ onInputChange }
                />

                <button 
                    type="submit"
                    className="btn btn-outline-primary mt-3">
                    Agregar
                </button>
            </form>
        </>
    )
}
