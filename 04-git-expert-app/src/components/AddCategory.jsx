import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = ({ target }) => {
        console.log(target.value);
        setinputValue(target.value)
    }
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories => [...categories, inputValue])
        onNewCategory( inputValue.trim() )
        setinputValue('')
    }

    return (
        <form onSubmit={ (event) => onSubmit(event) }>
            <input 
                type="text"
                placeholder="Buscar gif"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                // La linea superior se puede escribir de la siguiente manera:
                onChange={ onInputChange }
            />
        </form>
    )
}
