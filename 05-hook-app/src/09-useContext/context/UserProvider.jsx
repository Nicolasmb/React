import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id: 123,
//     name: 'Fernando Herrera',
//     email: 'fernando@google.com'
// }

export const UserProvider = ({ children }) => {
    
    const [user, setUser] = useState();

    return (
        // En el UserContext.Provider quiero proveer toda la información que 
        // el UserContext va a proporcionar al arbol de nuestros componentes.
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
  )
}
