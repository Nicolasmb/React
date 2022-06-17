import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
    // No hay que mutar el estado, por eso no se utiliza el método push. Utilizamos
    // el operador spread para desestructurar.
    setCategories([...categories, 'Batman'])
  }

  return (
      <> 
        <h1>GifExpertApp</h1>
        {/* Le definimos al componente AddCategory una prop denominada setCategories
        a traves de la cual le mandamos la referencia de la función setCategories del
        componente GifExpertApp. */}
        <AddCategory setCategories={ setCategories } />

        <button onClick={ onAddCategory }>Agregar</button>
        <ol>
          { categories.map( category => {
              return <li key={ category }>{ category }</li>
            })
          }
          {/* <li>ABC</li> */}
        </ol>
      </>
  )
}
