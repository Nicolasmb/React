import { useState } from "react"

export const GifExpertApp = () => {
    
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories( [ ...categories, 'Prueba'] );
        // Tambien se puede hacer con un callback que recibe el estado anterior y retorna el nuevo estado:
        // setCategories( cat => [...cat, 'Prueba'] )
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />

            <button onClick={ handleAdd }>Agregar</button>

            <ol>
                {
                    categories.map( category => {
                        return <li key={ category}>{ category }</li>
                    })
                }
            </ol>
        </>
    )
}