import { useState } from 'react'
import { AddCategory, GifGrid } from './components/';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if ( categories.includes(newCategory) ) return;
        // No hay que mutar el estado, por eso no se utiliza el método push. Utilizamos
        // el operador spread para desestructurar.
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* Le definimos al componente AddCategory una prop denominada setCategories
            a traves de la cual le mandamos la referencia de la función setCategories del
            componente GifExpertApp. */}
            <AddCategory onNewCategory={value => onAddCategory(value)} />

            { categories.map(category => <GifGrid key={ category } category={ category } />) }
        </>
    )
}
