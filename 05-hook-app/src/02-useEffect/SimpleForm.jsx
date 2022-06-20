import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'fernando@google.com'
    })

    const { username, email } = formState;

    const onInputChange = (event) => {
        const { name, value } = event.target
        setFormState({
            ...formState,
            [ name ]: value // Utilizamos las propiedades computadas de JavaScript ES6
        })
    }

    // Un useEffect siempre recibe una función como argumento.
    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState changed!');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed!');
    }, [email]);


    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input 
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
                />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'strider2') && <Message />
            }

        </>
  )
}
