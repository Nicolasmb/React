import React from "react";
import { createRoot } from 'react-dom/client';
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'


const root = createRoot(document.getElementById('root'));

root.render( <PrimeraApp saludo="Hola campeon"/> );
// root.render( <CounterApp value={ 15 }/> );

 