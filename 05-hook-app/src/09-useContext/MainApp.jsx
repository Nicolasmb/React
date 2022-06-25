import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";

export const MainApp = () => {
  return (
    // El UserProvider está ENMARCANDO a varios componentes.
    // Cualquier componente que se encuentre dentro del UserProvider
    // va a poder verlo y obtener la información que provee.
    <UserProvider>
        <NavBar />
        <hr />

        <Routes>
            <Route path="/" element={ <HomePage /> }/>
            <Route path="about" element={ <AboutPage /> }/>
            <Route path="login" element={ <LoginPage /> }/>

            <Route path="/*"  element={ <Navigate to={ "login" }/> } />
        </Routes>
    </UserProvider>
  )
}
