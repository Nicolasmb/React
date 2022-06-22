import { useState } from "react"

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm )

    const onInputChange = (event) => {
        const { name, value } = event.target // Obtenemos la propiedad "name" y "value" del elemento html que disparó el evento onChange.
        setFormState({
            ...formState,
            [ name ]: value // Utilizamos las propiedades computadas de JavaScript ES6
        })
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
