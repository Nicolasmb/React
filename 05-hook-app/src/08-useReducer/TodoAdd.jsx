import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm, description } = useForm({ 
        description: '' 
    })

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log('onNewTodo');
        console.log(formState);
        // if(inputValue.trim().length <= 1) return;
        // // setCategories(categories => [...categories, inputValue])
        // onNewCategory( inputValue.trim() )
        // setinputValue('')
    }


    return (
        <form onSubmit={ (event) => onSubmit(event) }>
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
                className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    )
}
