import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth/pages/LoginPage';
// Gracias a los archivos de barriel puedo importar lo que quiera del módul
// Heroes en una sola linea.
import {  HeroesRoutes } from '../heroes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route path='/*' element={<HeroesRoutes />} />
            </Routes>
        </>
    )
}
