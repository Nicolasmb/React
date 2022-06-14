import './App.css'; 
import { AppProvider } from './AppProvider';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import Presupuesto from './components/Presupuesto';

const App = () => {

  return (
    <AppProvider>
      {/* Todos los componentes incluidos aca podrán acceder al
          contexto que se esta ofreciendo desde este AppProvider */}
      <div className='container mt-3 '>
        <Presupuesto />
        <Formulario />
        <hr/>
        <Lista />
      </div>
    </AppProvider>
  )
}

export default App;
